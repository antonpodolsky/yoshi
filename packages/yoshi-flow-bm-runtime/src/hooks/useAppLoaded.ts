import { useCallback, useEffect } from 'react';
import { notifyViewFinishedLoading } from '@wix/business-manager-api';
import { useFedops } from '../fedops';
import useComponentInfo from './useComponentInfo';

export interface AppLoadedOptions {
  onMount?: boolean;
}

const useAppLoaded = ({ onMount }: AppLoadedOptions = {}) => {
  const { componentId, type } = useComponentInfo();
  const fedops = useFedops();

  const callback = useCallback(() => {
    if (type === 'page') {
      notifyViewFinishedLoading(componentId);
      if (fedops) {
        fedops.appLoaded();
      }
    }
  }, [componentId, type, fedops]);

  useEffect(() => {
    if (onMount) {
      callback();
    }
  }, [callback]);

  return callback;
};

export default useAppLoaded;
