import { useEffect, useMemo, useState } from 'react';

type Persistor = {
  save: (key: string, value: string) => void;
  load: (key: string) => string | null;
};

const localStoragePersistor: Persistor = {
  save: (key, value) => localStorage.setItem(key, value),
  load: (key) => localStorage.getItem(key),
};

export const usePersistedState = <S = undefined>(
  key: string,
  initialState: S,
  persistor: Persistor = localStoragePersistor,
) => {
  const hydratedState = useMemo(() => persistor.load(key), [persistor, key]);
  const dehydratedState = hydratedState === null ? initialState : JSON.parse(hydratedState);

  const [internalState, internalSetState] = useState<S>(dehydratedState);

  useEffect(() => {
    persistor.save(key, JSON.stringify(internalState));
  }, [key, internalState, persistor]);

  return [internalState, internalSetState] as const;
};
