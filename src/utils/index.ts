import { CardType } from "../types";

export const getLocalStorage = (key: string) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : ([] as CardType[]);
};

export const setLocalStorage = (key: string, data: CardType[]) => {
  localStorage.setItem(key, JSON.stringify(data));
};
