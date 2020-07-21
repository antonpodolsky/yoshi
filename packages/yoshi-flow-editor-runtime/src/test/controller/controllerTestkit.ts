// import nock from 'nock';
import _ from 'lodash';
import {
  IViewerScript,
  IWidgetControllerConfig,
} from '@wix/native-components-infra/dist/src/types/types';
import Experiments from '@wix/wix-experiments';
import {
  createControllersWithDescriptors,
  initAppForPageWrapper,
} from '../../viewerScript';
import {
  ExperimentsConfig,
  OOI_WIDGET_COMPONENT_TYPE,
  WidgetType,
} from '../../constants';
import { VisitorLogger } from '../../generated/bi-logger-types';
import mockExperiments from '../experiments/mock';
import { CreateControllerFn } from '../../types';
import { mockedInstance } from './instance.mock';
import { controllerConfigMock } from './controllerConfig.mock';
import { controllerFlowAPIMock } from './FlowAPI.mock';

const emptyExperimentsConfig: ExperimentsConfig = (null as unknown) as ExperimentsConfig;

export function getViewerScript(
  createAppController: CreateControllerFn,
  {
    appName,
    componentName,
    experimentsConfigMock,
    biLogger,
    widgetId,
  }: {
    experimentsConfigMock: ExperimentsConfig;
    appName: string;
    componentName: string;
    biLogger: VisitorLogger;
    widgetId: string;
  },
) {
  const initAppForPage = initAppForPageWrapper({
    appName,
    sentryConfig: null,
    experimentsConfig: experimentsConfigMock,
    inEditor: false,
    biConfig: {},
    biLogger: () => biLogger,
    projectName: '',
    defaultTranslations: null,
    translationsConfig: null,
  });
  const createControllers = createControllersWithDescriptors([
    {
      method: createAppController,
      widgetType: OOI_WIDGET_COMPONENT_TYPE as WidgetType,
      controllerFileName: 'testkit/src/components/TestComponent/controller.ts',
      appName,
      componentName,
      id: widgetId,
      translationsConfig: null,
      experimentsConfig: null,
      defaultTranslations: {},
      projectName: '',
      biLogger: () => biLogger,
      biConfig: {},
    },
  ]);

  const viewerScript: IViewerScript = {
    initAppForPage,
    createControllers,
  };

  return viewerScript;
}

export function getFrameworkMocks(
  setPropsSpy: (...args: Array<any>) => any = _.noop,
  experimentsConfigMock: ExperimentsConfig = emptyExperimentsConfig,
) {
  const appDefinitionId = 'APP_DEF_ID';
  const controllerConfig: IWidgetControllerConfig = controllerConfigMock({
    setProps: setPropsSpy,
    appParams: {
      instance: '1',
      instanceId: '1',
      appDefinitionId,
      baseUrls: {
        staticsBaseUrl: 'http://some-static-url.com',
      },
    },
  });

  controllerConfig.wixCodeApi.site.getAppToken = () => mockedInstance;

  const flowAPI = controllerFlowAPIMock({
    experimentsConfig: experimentsConfigMock,
    controllerConfig,
    biLogger: null,
    widgetId: 'someWidget',
    appDefinitionId,
  });

  return { flowAPI, controllerConfig };
}

export function setupServerMocks({
  experimentsConfig,
}: {
  experimentsConfig: ExperimentsConfig;
}) {
  const experiments = new Experiments({
    experiments: { 'specs.test.ShouldShowButton': 'true' },
  });
  mockExperiments(experimentsConfig.scope, experiments.all());
}
