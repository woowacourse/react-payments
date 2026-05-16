import { useState, useEffect, useCallback } from 'react';

import type { Options, Result } from './useLoadDAta.types';

export const useLoadData = <T = unknown>({ queryFn }: Options): Result<T> => {
  const [hasFetched, setHasFetched] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = useCallback(async (): Promise<T | void> => {
    setIsLoading(true);
    setError(null);

    try {
      const data = (await queryFn()) as T;
      setData(data);
      return data;
    } catch (error) {
      setError(error as Error);
    } finally {
      setIsLoading(false);
      setHasFetched(true);
    }
  }, [queryFn]);

  useEffect(() => {
    fetchData();
  }, []);

  return { data, error, isLoading, hasFetched };
};
