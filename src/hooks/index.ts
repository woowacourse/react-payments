import { useState } from "react";
import { CardType } from "../types";
import {
  getEmptyCard,
  getSeperatedCardNumber,
  getSeperatedExpiredDate,
  getSubCardNumber,
  getSubExpiredDate,
} from "../utils";

export const useCard = () => {
  const [card, setCard] = useState<CardType>(getEmptyCard());

  const setNewCard = (key: keyof CardType, value: string) => {
    switch (key) {
      case "cardNumber":
        setCard({
          ...card,
          [key]: getSeperatedCardNumber(getSubCardNumber(value)),
        });
        break;
      case "expiredDate":
        setCard({
          ...card,
          [key]: getSeperatedExpiredDate(getSubExpiredDate(value)),
        });
        break;
      case "ownerName":
        setCard({ ...card, [key]: value.toLocaleUpperCase() });
    }
  };

  return [card, setNewCard] as const;
};
