import { useEffect, useState } from 'react';

type Status = 'idle' | 'loading' | 'success' | 'error';

interface UseQueryOptions<T> {
  queryFn: () => Promise<T>;
}

export const useQuery = <T>({ queryFn }: UseQueryOptions<T>) => {
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState<Error | null>(null);

  const [data, setData] = useState<T>();

  useEffect(() => {
    let cancelled = false;

    const fetchQuery = async () => {
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
    };

    fetchQuery();

    return () => {
      cancelled = true;
    };
  }, []);

  return {
    data,
    error,
    isIdle: status === 'idle',
    isLoading: status === 'loading',
    isSuccess: status === 'success',
    isError: status === 'error',
  };
};
