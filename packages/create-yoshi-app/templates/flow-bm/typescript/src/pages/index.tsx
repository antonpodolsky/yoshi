import React, { FC, Suspense } from 'react';
import { useExperiments, useAppLoaded } from 'yoshi-flow-bm-runtime';
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
  useAppLoaded({ onMount: true });

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
