import { useState } from "react";
import { CardType } from "../types";
import { getEmptyCard } from "../utils";

export const useCard = () => {
  const [card, setCard] = useState<CardType>(getEmptyCard());

  const setNewCard = (key: keyof CardType, value: string) => {
    setCard({ ...card, [key]: value });
  };

  return [card, setNewCard] as const;
};
