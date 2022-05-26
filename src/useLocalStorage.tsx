import { useState } from "react";

type ReturnType<T> = [
  T | undefined,
  React.Dispatch<React.SetStateAction<T | undefined>>
];

export default function useLocalStorage<T>(
  key: string,
  initialValue?: T
): ReturnType<T> {
  const [data, setData] = useState<T | undefined>(
    JSON.parse(window.localStorage.getItem(key)) || initialValue
  );

  const saveData = (data: T) => {
    setData(data);
    window.localStorage.setItem(key, JSON.stringify(data));
  };

  return [data, saveData];
}
