---
id: runtimes
title: Runtimes
sidebar_label: Runtimes
---

## Fedops

Create a valid `fedops.json` file in order to opt-in to the built-in Fedops integration.

Simply by having a `fedops.json`, your page/exported components will be pre-configured with a Fedops instance available through Context:

```typescript jsx
import React, { useEffect } from 'react';
import { useFedops } from 'yoshi-flow-bm-runtime';

export default () => {
  const fedops = useFedops();

  useEffect(() => {
    fedops.appLoaded();
  }, []);

  return <div>...</div>
}
```

## App Load

When developing a Business-Manager app, we usually need to call `notifyViewStartLoading` & `notifyViewFinishedLoading` respectively (for BI purposes, and for BM's global loader).

When using the BM Flow, we call `notifyViewStartLoading` for you, and we support the following 2 methods for signalling your app loaded:

- Option 1

```typescript jsx
import { useAppLoaded } from 'yoshi-flow-bm-runtime';

export default () => {
  useAppLoaded({ onMount: true });
  return <div>...</div>;
};
```

- Option 2  

```typescript jsx
import { useAppLoaded } from 'yoshi-flow-bm-runtime';

export default () => {
  const appLoaded = useAppLoaded();
  
  useEffect(() => {
    fetchSomething().then(appLoaded);
  }, []);

  return <div>...</div>;
};
```

> Pro Tip! This will also call `fedops.appLoaded()` for you! (Assuming you have a `fedops.json` file)
