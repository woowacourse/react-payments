import { CardRegisterInfo } from "../types/card.type";

export const getLocalStorageItem = <T, Default = T>(key: string, defaultValue?: Default): T | Default => {
  const value = localStorage.getItem(key);

  return value ? JSON.parse(value) : defaultValue;
};

export const setLocalStorageItem = (key: string, data: unknown) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const getCardList = () => getLocalStorageItem<CardRegisterInfo[]>("CardList", []);

export const setCardList = (data: unknown) => setLocalStorageItem("CardList", data);
