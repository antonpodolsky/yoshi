import path from 'path';
import arg from 'arg';
import fs from 'fs-extra';
import chalk from 'chalk';
import bfj from 'bfj';
import {
  printBuildResult,
  printBundleSizeSuggestion,
} from 'yoshi-common/build/print-build-results';
import WebpackManager from 'yoshi-common/build/webpack-manager';
import {
  STATICS_DIR,
  TARGET_DIR,
  SERVER_CHUNKS_BUILD_DIR,
  SERVER_BUNDLE,
  STATS_FILE,
} from 'yoshi-config/build/paths';
import { inTeamCity as checkInTeamCity } from 'yoshi-helpers/build/queries';
import { copyTemplates } from 'yoshi-common/build/copy-assets';
import { cliCommand } from '../bin/yoshi-monorepo';
import {
  createClientWebpackConfig,
  createServerWebpackConfig,
  createWebWorkerWebpackConfig,
  createWebWorkerServerWebpackConfig,
} from '../webpack.config';
import buildPkgs from '../build';

const inTeamCity = checkInTeamCity();

const build: cliCommand = async function(argv, rootConfig, { apps, libs }) {
  const args = arg(
    {
      // Types
      '--help': Boolean,
      '--analyze': Boolean,
      '--stats': Boolean,
      '--source-map': Boolean,

      // Aliases
      '-h': '--help',
    },
    { argv },
  );

  const {
    '--help': help,
    '--analyze': isAnalyze,
    '--stats': shouldEmitWebpackStats,
    '--source-map': forceEmitSourceMaps,
  } = args;

  if (help) {
    console.log(
      `
      Description
        Compiles the application for production deployment

      Usage
        $ yoshi-monorepo build

      Options
        --help, -h      Displays this message
        --analyze       Run webpack-bundle-analyzer
        --stats         Emit webpack's stats file on "target/webpack-stats.json"
        --source-map    Emit bundle source maps
    `,
    );

    process.exit(0);
  }

  await buildPkgs([...libs, ...apps]);

  await Promise.all(
    apps.reduce((acc: Array<Promise<void>>, app) => {
      return [
        ...acc,
        fs.emptyDir(path.join(app.location, STATICS_DIR)),
        fs.emptyDir(path.join(app.location, TARGET_DIR)),
        fs.emptyDir(path.join(app.location, SERVER_CHUNKS_BUILD_DIR)),
        fs.unlink(path.join(app.location, SERVER_BUNDLE)).catch(() => {}),
      ];
    }, []),
  );

  await Promise.all(apps.map(app => copyTemplates(app.location)));

  if (inTeamCity) {
    const petriSpecs = await import('yoshi-common/build/sync-petri-specs');
    const wixMavenStatics = await import('yoshi-common/build/maven-statics');

    await Promise.all(
      apps.reduce((acc: Array<Promise<void>>, app) => {
        return [
          ...acc,
          petriSpecs.default({
            config: app.config.petriSpecsConfig,
            cwd: app.location,
          }),
          wixMavenStatics.default({
            clientProjectName: app.config.clientProjectName,
            staticsDir: app.config.clientFilesPath,
            cwd: app.location,
          }),
        ];
      }, []),
    );
  }

  const webpackManager = new WebpackManager();

  apps.forEach(pkg => {
    const clientDebugConfig = createClientWebpackConfig(rootConfig, pkg, {
      isDev: true,
      forceEmitSourceMaps,
    });

    const clientOptimizedConfig = createClientWebpackConfig(rootConfig, pkg, {
      isAnalyze,
      forceEmitSourceMaps,
    });

    const serverConfig = createServerWebpackConfig(rootConfig, libs, pkg, {
      isDev: true,
    });

    let webWorkerConfig;
    let webWorkerOptimizeConfig;

    if (pkg.config.webWorkerEntry) {
      webWorkerConfig = createWebWorkerWebpackConfig(rootConfig, pkg, {
        isDev: true,
      });

      webWorkerOptimizeConfig = createWebWorkerWebpackConfig(rootConfig, pkg);
    }

    let webWorkerServerConfig;

    if (pkg.config.webWorkerServerEntry) {
      webWorkerServerConfig = createWebWorkerServerWebpackConfig(pkg, {
        isDev: true,
      });
    }

    webpackManager.addConfigs(pkg.name, [
      clientDebugConfig,
      clientOptimizedConfig,
      serverConfig,
      webWorkerConfig,
      webWorkerOptimizeConfig,
      webWorkerServerConfig,
    ]);
  });

  const { getAppData } = await webpackManager.run();

  if (shouldEmitWebpackStats) {
    await Promise.all(
      apps.map(async app => {
        const { stats } = getAppData(app.pkg.name);
        const [, clientOptimizedStats] = stats;

        const statsFilePath = path.join(app.location, STATS_FILE);

        fs.ensureDirSync(path.dirname(statsFilePath));
        await bfj.write(statsFilePath, clientOptimizedStats.toJson());
      }),
    );
  }

  apps.forEach(pkg => {
    console.log(chalk.bold.underline(pkg.name));
    console.log();

    const [, clientOptimizedStats, serverStats] = getAppData(pkg.name).stats;

    printBuildResult({
      webpackStats: [clientOptimizedStats, serverStats],
      cwd: pkg.location,
    });

    console.log();
  });

  printBundleSizeSuggestion();
};

export default build;