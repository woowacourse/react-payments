import { useCallback, useState } from 'react';

type AsyncStatus = 'idle' | 'loading' | 'success' | 'error';

interface AsyncState<T> {
  status: AsyncStatus;
  data: T | null;
  error: Error | null;
}

export const useAsync = <T>() => {
  const [state, setState] = useState<AsyncState<T>>({
    status: 'idle',
    data: null,
    error: null,
  });

  const run = useCallback(async (asyncFunction: () => Promise<T>) => {
    setState({
      status: 'loading',
      data: null,
      error: null,
    });

    try {
      const data = await asyncFunction();
      setState({
        status: 'success',
        data,
        error: null,
      });
      return data;
    } catch (error) {
      setState({
        status: 'error',
        data: null,
        error: error as Error,
      });
      throw error;
    }
  }, []);

  return {
    ...state,
    run,
  };
};
