import { FlowBMModel } from './model';
import {
  shouldAddBI,
  shouldAddExperiments,
  shouldAddFedops,
  shouldAddSentry,
} from './queries';

export const generateComponentCode = (
  { absolutePath, componentId }: { absolutePath: string; componentId: string },
  type: 'page' | 'exported-component',
  model: FlowBMModel,
) => {
  const addExperiments = shouldAddExperiments(model);
  const addSentry = shouldAddSentry(model);
  const addFedops = shouldAddFedops(model);
  const addBI = shouldAddBI(model);

  return `
import Component from '${absolutePath}';
import {
  wrapComponent,
  createComponentInfoProvider,
  ${addExperiments ? 'createExperimentsProvider,' : ''}
  ${addSentry ? 'createSentryProvider,' : ''}
  ${addFedops ? 'createFedopsProvider,' : ''}
  ${addBI ? 'createBIProvider,' : ''}
} from 'yoshi-flow-bm-runtime';

${addBI ? `import initSchemaLogger from '${model.config.bi}';` : ''}

export default wrapComponent(Component, [
  createComponentInfoProvider(JSON.parse('${JSON.stringify({
    componentId,
    type,
  })}')),
  ${
    addExperiments
      ? `createExperimentsProvider(${JSON.stringify(
          model.config.experimentsScopes,
        )}),\n`
      : ''
  }
  ${addSentry ? `createSentryProvider('${model.config.sentry?.DSN}'),` : ''}
  ${addFedops ? `createFedopsProvider('${componentId}'),` : ''}
  ${addBI ? `createBIProvider(initSchemaLogger),` : ''}
]);`;
};
