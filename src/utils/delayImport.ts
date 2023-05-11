import type { ComponentType } from 'react';

export const delayImportComponent = <T extends {}>(
  promise: Promise<{ default: ComponentType<T> }>,
  ms = 2000,
) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  }).then(() => promise);
