import { useEffect, useEffectEvent, useState } from 'react';

type Status = 'idle' | 'loading' | 'success' | 'error';

interface UseQueryOptions<T> {
  queryFn: () => Promise<T>;
}

export const useQuery = <T>({ queryFn }: UseQueryOptions<T>) => {
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<T>();
  const [refetchKey, setRefetchKey] = useState(0);

  const runQuery = useEffectEvent(async (signal: { cancelled: boolean }) => {
    setStatus('loading');

    try {
      const res = await queryFn();
      if (signal.cancelled) return;

      setData(res);
      setStatus('success');
      setError(null);
    } catch (err) {
      if (signal.cancelled) return;

      setError(err as Error);
      setStatus('error');
    }
  });

  useEffect(() => {
    const signal = { cancelled: false };

    // refetchKey만 deps에 포함되기 때문에 cascade render가 구조적으로 발생하지 않음.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    runQuery(signal);

    return () => {
      signal.cancelled = true;
    };
  }, [refetchKey]);

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
