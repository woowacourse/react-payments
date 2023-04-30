import { useCallback, useEffect, useRef, useState } from 'react';

type SetFunction = () => void;
type ClearFunction = SetFunction;
type IsReady = boolean | null;

type UseTimeout = [SetFunction, ClearFunction, IsReady];

const useTimeout = (fn: Function, ms = 0): UseTimeout => {
  const [isReady, setIsReady] = useState<boolean | null>(false);

  const timeout = useRef<ReturnType<typeof setTimeout>>();
  const callback = useRef(fn);

  const set = useCallback(() => {
    setIsReady(false);

    if (timeout.current) {
      clearTimeout(timeout.current);
    }

    setIsReady(true);
    timeout.current = setTimeout(() => {
      callback.current();
    }, ms);
  }, [ms]);

  const clear = useCallback(() => {
    if (timeout.current == null) return;

    setIsReady(null);

    if (timeout.current) {
      clearTimeout(timeout.current);
    }
  }, []);

  useEffect(() => {
    return clear;
  }, [clear]);

  return [set, clear, isReady];
};

export default useTimeout;
