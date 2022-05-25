import { CardInfoStateTypeInterface } from "context/CardInfoContext";
import { useState } from "react";

type ReturnType = [
  CardInfoStateTypeInterface[],
  (data: CardInfoStateTypeInterface[]) => void
];

export default function useLocalStorage(key: string): ReturnType {
  const [data, setData] = useState<CardInfoStateTypeInterface[] | null>(
    JSON.parse(window.localStorage.getItem(key)) || []
  );

  const saveData = (data: CardInfoStateTypeInterface[]) => {
    setData(data);
    window.localStorage.setItem(key, JSON.stringify(data));
  };

  return [data, saveData];
}
