import { IWixStatic } from '@wix/native-components-infra/dist/src/types/wix-sdk';
import { aStyleParams } from '@wix/native-components-infra/dist/test/builders/style-params.builder';
import { SantaPropsBuilder } from '@wix/native-components-infra/dist/test/builders/santa-props.builder';

const boundingRect = {
  offsets: { y: 0, x: 0 },
  rect: { left: 0, top: 0, width: 500, height: 500, right: 500, bottom: 500 },
  scale: 1,
};

const appFields = {
  platform: {
    baseUrls: {
      translations: 'https://translations',
    },
  },
};

const styleParams = aStyleParams();
const siteTextPresets = new SantaPropsBuilder().get().host.style
  .siteTextPresets;
const siteColors = new SantaPropsBuilder().get().host.style.siteColors;

export const Wix: Partial<IWixStatic> = {
  // @ts-ignore
  Utils: {
    getViewMode: () => 'site',
    getUid: () => '00000000-0000-0000-0000-000000000000',
    getLocale: () => 'en',
    getDeviceType: () => 'desktop',
    getInstanceValue: () => 'instance-value',
    getCompId: () => 'comp-id',
  },
  // @ts-ignore
  Styles: {
    getStyleId: (cb) => cb('style-id'),
    getSiteColors: (cb) => {
      cb(siteColors);
      return siteColors;
    },
    getStyleParams: (cb) => {
      cb(styleParams);
      return styleParams;
    },
    getSiteTextPresets: (cb) => {
      cb(siteTextPresets);
      return siteTextPresets;
    },
  },
  Events: {
    EDIT_MODE_CHANGE: 'EDIT_MODE_CHANGE',
    PAGE_NAVIGATION_CHANGE: 'PAGE_NAVIGATION_CHANGE',
    SITE_PUBLISHED: 'SITE_PUBLISHED',
    COMPONENT_DELETED: 'COMPONENT_DELETED',
    SETTINGS_UPDATED: 'SETTINGS_UPDATED',
    WINDOW_PLACEMENT_CHANGED: 'WINDOW_PLACEMENT_CHANGED',
    ON_MESSAGE_RESPONSE: 'ON_MESSAGE_RESPONSE',
    THEME_CHANGE: 'THEME_CHANGE',
    STYLE_PARAMS_CHANGE: 'STYLE_PARAMS_CHANGE',
    SCROLL: 'SCROLL',
    PAGE_NAVIGATION: 'PAGE_NAVIGATION',
    PAGE_NAVIGATION_IN: 'PAGE_NAVIGATION_IN',
    PAGE_NAVIGATION_OUT: 'PAGE_NAVIGATION_OUT',
    STATE_CHANGED: 'STATE_CHANGED',
    DEVICE_TYPE_CHANGED: 'DEVICE_TYPE_CHANGED',
    SITE_SAVED: 'SITE_SAVED',
    SESSION_CHANGED: 'SESSION_CHANGED',
    PUBLIC_DATA_CHANGED: 'PUBLIC_DATA_CHANGED',
    SITE_METADATA_CHANGED: 'SITE_METADATA_CHANGED',
    INSTANCE_CHANGED: 'INSTANCE_CHANGED',
  },
  getBoundingRectAndOffsets: (callback) => {
    callback(boundingRect);
  },
  getSiteInfo: (callback) => callback({} as any),
  getCurrentPageId: (cb) => cb('current-page-id'),
  isVisualFocusEnabled: (cb) => cb(true),
  addEventListener: () => {},
  getApplicationFields(appDefinitionId: string, cb) {
    cb(appFields);
  },
  getExternalId: (cb) => cb('external-id'),
  getComponentInfo: (cb) => cb({} as any),
};
