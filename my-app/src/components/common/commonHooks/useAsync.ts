import { useCallback, useRef, useState } from 'react';

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

  const idRef = useRef(0);

  const run = useCallback(async (asyncFunction: () => Promise<T>) => {
    const currentIdRef = ++idRef.current;

    setState({
      status: 'loading',
      data: null,
      error: null,
    });

    try {
      const data = await asyncFunction();

      if (currentIdRef !== idRef.current) return undefined;

      setState({
        status: 'success',
        data,
        error: null,
      });
      return data;
    } catch (error) {
      if (currentIdRef !== idRef.current) return undefined;
      setState({
        status: 'error',
        data: null,
        error: error as Error,
      });
      return undefined;
    }
  }, []);

  return {
    ...state,
    run,
  };
};
