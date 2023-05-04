import { SetStateAction, useEffect, useState } from "react";

type setStateParam<T> = SetStateAction<T> | T;

export const useLocalStorage = <T,>(initialValue: T, key: string) => {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    try {
      const savedData = JSON.parse(localStorage.getItem(key) || "[]");
      if (savedData && savedData.length > 0) setValue(savedData);
    } catch (error) {
      console.error(error);
      setValue(initialValue);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  const setState = (param: setStateParam<T>) => {
    setValue(param);
  };

  return [value, setState] as const;
};
