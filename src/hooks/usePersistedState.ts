import { useEffect, useMemo, useState } from 'react';

export const usePersistedState = <S = undefined>(key: string, initialState: S) => {
  const hydratedState = useMemo(() => localStorage.getItem(key), [key]);
  const dehydratedState = hydratedState === null ? initialState : JSON.parse(hydratedState);

  const [internalState, internalSetState] = useState<S>(dehydratedState);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(internalState));
  }, [key, internalState]);

  return [internalState, internalSetState] as const;
};
