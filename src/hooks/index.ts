import { createRef, useEffect, useRef, useState } from "react";
import { CARD_INPUT_REFS_INDEX } from "../constants";
import { CardType } from "../types";
import {
  getEmptyCard,
  getSeperatedCardNumber,
  getSeperatedExpiredDate,
  getSubCardNumber,
  getSubExpiredDate,
  validateForm,
} from "../utils";

export const useCard = () => {
  const [isValidCard, setIsValidCard] = useState(false);
  const [card, setCard] = useState<CardType>(getEmptyCard());

  useEffect(() => {
    setIsValidCard(validateForm(card));
  }, [card]);

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
        break;
      default:
        setCard({ ...card, [key]: value });
    }
  };

  return [card, isValidCard, setNewCard] as const;
};

export const useCardInputRefs = () => {
  const inputRefs = Array.from({ length: 6 }).map(createRef<HTMLInputElement>);

  const moveFocus = (key: string) => {
    if (
      document.activeElement === inputRefs[CARD_INPUT_REFS_INDEX[key]].current
    ) {
      inputRefs[CARD_INPUT_REFS_INDEX[key] + 1].current?.focus();
    }
  };

  return [inputRefs, moveFocus] as const;
};
