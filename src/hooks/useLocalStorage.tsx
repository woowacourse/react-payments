import { useEffect, useState } from "react";

export const useLocalStorage = <T,>(
  initialValue: T,
  key: string
): [T, (data: T) => void] => {
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

  const setState = (data: T) => {
    setValue(data);
    localStorage.setItem(key, JSON.stringify(data));
  };

  return [value, setState];
};
