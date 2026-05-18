import { useCallback, useEffect, useState } from 'react';

type Status = 'idle' | 'loading' | 'success' | 'error';

interface UseQueryOptions<T> {
  queryFn: () => Promise<T>;
}

export const useQuery = <T>({ queryFn }: UseQueryOptions<T>) => {
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState<Error | null>(null);

  const [data, setData] = useState<T>();

  const fetchQuery = useCallback(async () => {
    setStatus('loading');
    try {
      const res = await queryFn();

      setData(res);
      setStatus('success');
      setError(null);
    } catch (err) {
      setError(err as Error);
      setStatus('error');
    }
  }, [queryFn]);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      await fetchQuery();
      if (cancelled) setStatus('idle');
    })();

    return () => {
      cancelled = true;
    };
  }, [fetchQuery]);

  return {
    data,
    error,
    status,
    isIdle: status === 'idle',
    isLoading: status === 'loading',
    isSuccess: status === 'success',
    isError: status === 'error',
    refetch: fetchQuery,
  };
};
