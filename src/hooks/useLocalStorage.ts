import { SetStateAction, useEffect, useState } from 'react';

const useLocalStorage = <T>(key: string, initialValue: T) => {
  const [localData, setLocalData] = useState<T>(() => {
    const item = localStorage.getItem(key);

    return item ? JSON.parse(item) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(localData));
  }, [key, localData]);

  const setData = (param: SetStateAction<T> | T) => {
    setLocalData(param);
  };

  return [localData, setData] as const;
};

export default useLocalStorage;
