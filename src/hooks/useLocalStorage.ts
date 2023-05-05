import { useState } from 'react';

export const useLocalStorage = <T extends unknown>(
  key: string,
  initialValue: T,
): [T, (value: T) => void] => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === 'undefined') return initialValue;

    try {
      const item = localStorage.getItem(key);

      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      if (error instanceof Error) console.error(error.message);

      return initialValue;
    }
  });

  const setValue = (value: T) => {
    try {
      const valueToStore = value;

      if (typeof window === 'undefined') throw new Error('Cannot store Value');

      setStoredValue(valueToStore);
      localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      if (error instanceof Error) console.error(error.message);
    }
  };

  return [storedValue, setValue];
};
