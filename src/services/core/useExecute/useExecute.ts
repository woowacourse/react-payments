import { useState, useCallback } from 'react';

import type { Options, Result } from './useExecute.types';

export const useExecute = <T = unknown>({ executeFn, onSuccess, onError }: Options) => {
  const [status, setStatus] = useState<Result<T>>({
    status: 'idle',
    data: null,
    error: null,
  });
  const mutate = useCallback(
    async (...rest: any) => {
      setStatus({
        status: 'loading',
        data: null,
        error: null,
      });

      try {
        const data = (await executeFn(...rest)) as T;
        setStatus({
          status: 'success',
          data,
          error: null,
        });
        onSuccess?.(data);
        return data;
      } catch (error: unknown) {
        setStatus({
          status: 'error',
          data: null,
          error: true,
        });
        onError?.(error);
      }
    },
    [executeFn, onSuccess, onError],
  );

  return { status, mutate };
};
