import { useState } from "react";
import { CardType } from "../types";
import { getEmptyCard } from "../utils";

export const useCard = () => {
  const [card, setCard] = useState<CardType>(getEmptyCard());

  const setNewCard = (key: keyof Omit<CardType, "password">, value: string) => {
    setCard({ ...card, [key]: value });
  };

  const setPassword = (value: string[]) => {
    setCard({ ...card, password: value });
  };

  return [card, setNewCard, setPassword] as const;
};
