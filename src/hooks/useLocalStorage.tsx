import { useEffect, useState } from "react";

export const useLocalStorage = <T,>(
  initialValue: T,
  key: string
): [T, (data: T) => void] => {
  const [value, setData] = useState(initialValue);

  const setValue = (data: T) => {
    setData(data);
    localStorage.setItem(key, JSON.stringify(data));
  };

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem(key) || "[]");
    if (savedData && savedData.length > 0) setData(savedData);
  }, [key]);

  return [value, setValue];
};
