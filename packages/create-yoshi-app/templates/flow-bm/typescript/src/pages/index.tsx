import React, { FC, useEffect, Suspense } from 'react';
import { notifyViewFinishedLoading } from '@wix/business-manager-api';
import { useExperiments, useFedops } from 'yoshi-flow-bm-runtime';
import t from '../../translations/en.json';

const Experiment: FC = () => {
  const { experiments } = useExperiments();

  return (
    <div>
      Spec is {experiments.enabled('specs.foo.bar') ? 'ENABLED' : 'DISABLED'}!
    </div>
  );
};

const Index: FC = () => {
  const fedops = useFedops();

  useEffect(() => {
    notifyViewFinishedLoading('{%projectName%}.pages.index');
    fedops.appLoaded();
  }, []);

  return (
    <div>
      <h1>{t['app.title']}</h1>
      <Suspense fallback="Conducting...">
        <Experiment />
      </Suspense>
    </div>
  );
};

export default Index;
