import type { Dispatch } from 'react';
import { useState } from 'react';

export const useLocalStorage = <T>(key: string, initialType: object[] | object) => {
  const [localStorageData, setLocalStorageData] = useState<T>(
    JSON.parse(localStorage.getItem(key) ?? `${JSON.stringify(initialType)}`),
  );

  const internalSetLocalStorageData: Dispatch<T> = (nextLocalStorageData) => {
    localStorage.setItem(key, JSON.stringify(nextLocalStorageData));

    setLocalStorageData(nextLocalStorageData);
  };

  return { localStorageData, internalSetLocalStorageData };
};
