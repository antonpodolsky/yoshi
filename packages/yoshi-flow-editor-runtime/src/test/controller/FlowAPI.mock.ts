import { IWidgetControllerConfig } from '@wix/native-components-infra/dist/src/types/types';
import { aDefaultPlatformServices } from '@wix/native-components-infra/dist/test/builders/platformServices.builder';
import { ExperimentsConfig } from '../../constants';
import {
  ViewerScriptFlowAPI,
  ControllerFlowAPI,
} from '../../flow-api/ViewerScript';
import { wixCodeAPIMock } from './controllerConfig.mock';

export const controllerFlowAPIMock = ({
  experimentsConfig,
  controllerConfig,
  appDefinitionId,
  widgetId,
  biLogger = null,
}: {
  experimentsConfig: ExperimentsConfig;
  controllerConfig: IWidgetControllerConfig;
  appDefinitionId: string;
  widgetId: string;
  biLogger: any;
}) =>
  new ControllerFlowAPI({
    viewerScriptFlowAPI: new ViewerScriptFlowAPI({
      experimentsConfig,
      sentry: null,
      biConfig: null,
      appName: 'app',
      projectName: 'project',
      biLogger,
      inEditor: false,
      platformServices: aDefaultPlatformServices(),
      wixAPI: wixCodeAPIMock,
      translationsConfig: {
        default: 'en',
      },
    }),
    translationsConfig: {
      default: 'en',
    },
    controllerConfig,
    appDefinitionId,
    widgetId,
  });
