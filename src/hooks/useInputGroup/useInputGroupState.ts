import { useCallback, useState } from "react";

export function useStates<T>(initialValue: T[] | (() => T[])) {
  const [states, setStates] = useState<T[]>(initialValue);

  const setStateAt = useCallback((index: number, error: T) => {
    setStates(prev => {
      const newValue = [...prev];
      newValue[index] = error;
      return newValue;
    })
  }, [])

  return {
    states,
    setStates,
    setStateAt
  };
}

export function useResizableStates<T>(initialValue: T[] | (() => T[])) {
  const {
    states,
    setStates,
    setStateAt
  } = useStates<T>(initialValue);

  const resizeStates = useCallback((length: number, defaultState: T | (() => T)) => {
    setStates(prev => Array.from({ length }).map((_, index) => index in prev ? prev[index] : (typeof defaultState === 'function' ? (defaultState as () => T)() : defaultState)));
  }, [setStates])

  return {
    states,
    setStates,
    setStateAt,
    resizeStates
  };
}
