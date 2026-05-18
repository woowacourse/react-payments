import { useState, useEffect, useCallback } from 'react';

import type { Options, Status, Result } from './useLoadData.types';

export const useLoadData = <T = unknown>({ queryFn }: Options): Result<T> => {
  const [status, setStatus] = useState<Status<T>>({
    status: 'idle',
    data: null,
    error: null,
  });

  const fetchData = useCallback(async (): Promise<T | void> => {
    setStatus({
      status: 'loading',
      data: null,
      error: null,
    });

    try {
      const data = (await queryFn()) as T;
      setStatus({
        status: 'success',
        data: data,
        error: null,
      });
      return data;
    } catch {
      setStatus({
        status: 'error',
        data: null,
        error: true,
      });
    }
  }, [queryFn]);

  const refetch = useCallback(() => {
    return fetchData();
  }, [fetchData]);

  useEffect(() => {
    fetchData();
  }, []);

  return { status, refetch };
};
