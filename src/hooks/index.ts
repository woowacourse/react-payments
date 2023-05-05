import { useRef, useState } from "react";
import { CARD_INPUT_REFS_INDEX } from "../constants";
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
        break;
      default:
        setCard({ ...card, [key]: value });
    }
  };

  return [card, setNewCard] as const;
};

export const useCardInputRefs = () => {
  const cardNumberRef = useRef<HTMLInputElement>(null);
  const expiredDateRef = useRef<HTMLInputElement>(null);
  const ownerNameRef = useRef<HTMLInputElement>(null);
  const cvcRef = useRef<HTMLInputElement>(null);
  const password1Ref = useRef<HTMLInputElement>(null);
  const password2Ref = useRef<HTMLInputElement>(null);

  const inputRefs = [
    cardNumberRef,
    expiredDateRef,
    ownerNameRef,
    cvcRef,
    password1Ref,
    password2Ref,
  ];

  const moveFocus = (key: string) => {
    if (
      document.activeElement === inputRefs[CARD_INPUT_REFS_INDEX[key]].current
    ) {
      inputRefs[CARD_INPUT_REFS_INDEX[key] + 1].current?.focus();
    }
  };

  return [inputRefs, moveFocus] as const;
};
