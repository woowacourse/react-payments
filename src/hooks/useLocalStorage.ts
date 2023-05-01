import type { Dispatch } from 'react';
import { useState } from 'react';

export const useLocalStorage = <T extends object[] | object>(key: string, defaultValue: T) => {
  const [localStorageData, setLocalStorageData] = useState<T>(
    JSON.parse(localStorage.getItem(key) ?? `${JSON.stringify(defaultValue)}`),
  );

  const internalSetLocalStorageData: Dispatch<T> = (nextLocalStorageData) => {
    localStorage.setItem(key, JSON.stringify(nextLocalStorageData));

    setLocalStorageData(nextLocalStorageData);
  };

  return { localStorageData, internalSetLocalStorageData };
};
