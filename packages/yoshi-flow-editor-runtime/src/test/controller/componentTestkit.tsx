import { ViewerScriptWrapper } from '@wix/native-components-infra';
import React from 'react';
// import { mount, ReactWrapper as OrigReactWrapper } from 'enzyme';
// import { flushAllPromises } from '@wix/native-components-infra/dist/test/flush-promises';
import { TPAComponentsProvider } from 'wix-ui-tpa/TPAComponentsConfig';
import { IWixStatic } from '@wix/native-components-infra/dist/src/types/wix-sdk';
// import { AppState, ProbeContext } from '../src/state/createStore';
// import { id as widgetId } from '../src/components/MainPage/.component.json';
import { CreateControllerFn } from '../../types';
import { ExperimentsConfig } from '../../constants';
import { Wix } from '../js-sdk/mock';
import { VisitorLogger } from '../../generated/bi-logger-types';
import { mockedInstance } from './instance.mock';
import { getViewerScript } from './controllerTestkit'; // getFrameworkMocks,
// import TestComponent from './TestComponent';

// const { flowAPI } = getFrameworkMocks();

export function setupWidgetWithController(
  Component: React.ElementType,
  controller: CreateControllerFn,
  {
    appName = 'TestApp',
    widgetId = 'TEST_COMPONENT_ID',
    componentName = 'TestComponent',
    experimentsConfigMock = { scope: 'test' },
    biLogger = null,
  }: {
    appName: string;
    widgetId: string;
    componentName: string;
    experimentsConfigMock: ExperimentsConfig;
    biLogger: VisitorLogger;
  },
) {
  const UUT = ({ ...rest }: any) => (
    <TPAComponentsProvider value={{ mobile: false }}>
      <Component {...rest} />
    </TPAComponentsProvider>
  );

  window.Wix = Wix as IWixStatic;

  const WrappedComponent = ViewerScriptWrapper(UUT, {
    viewerScript: getViewerScript(controller, {
      appName,
      experimentsConfigMock,
      biLogger,
      componentName,
      widgetId,
    }),
    widgetConfig: {
      widgetId,
      dataKeys: [],
    },
    Wix: window.Wix,
    overrides: {
      instance: mockedInstance,
      siteBaseUrl: 'http://localhost/my-website',
    },
  });

  return { WrappedComponent };
}

// export async function mountHelper(
//   node: React.ReactElement,
// ): Promise<ReactWrapper> {
//   const wrapper = mount(node, {
//     attachTo: document.querySelector('.comp-id') as HTMLElement,
//   });
//   await flushAllPromises();
//   return wrapper.update();
// }

// export type ReactWrapper = OrigReactWrapper;
