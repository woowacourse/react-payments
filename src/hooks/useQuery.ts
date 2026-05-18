import { useEffect, useState } from 'react';

type Status = 'idle' | 'loading' | 'success' | 'error';

interface UseQueryOptions<T> {
  queryFn: () => Promise<T>;
}

export const useQuery = <T>({ queryFn }: UseQueryOptions<T>) => {
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<T>();
  const [refetchKey, setRefetchKey] = useState(0);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      setStatus('loading');
      try {
        const res = await queryFn();
        if (cancelled) return;

        setData(res);
        setStatus('success');
      } catch (err) {
        if (cancelled) return;

        setError(err as Error);
        setStatus('error');
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [refetchKey, queryFn]);

  const flushRefetch = () => setRefetchKey((key) => key + 1);

  return {
    data,
    error,
    status,
    isIdle: status === 'idle',
    isLoading: status === 'loading',
    isSuccess: status === 'success',
    isError: status === 'error',
    refetch: flushRefetch,
  };
};
