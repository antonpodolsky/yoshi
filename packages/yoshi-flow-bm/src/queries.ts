import { FlowBMModel } from './model';

export const shouldAddExperiments = (model: FlowBMModel) =>
  model.config.experimentsScopes.length > 0;

export const shouldAddSentry = (model: FlowBMModel) =>
  !!model.config.sentry?.DSN;

export const shouldAddFedops = (model: FlowBMModel) => !!model.fedopsPath;

export const shouldAddBI = (model: FlowBMModel) => !!model.config.bi;
