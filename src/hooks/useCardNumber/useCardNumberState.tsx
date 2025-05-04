import { useState } from "react";
import { updateArrayAt } from "../../utils/updateArrayAt";

const CARD_RULE = {
  INVALID_CARD_NUMBER_LENGTH: "카드 번호는 4자리 숫자여야 합니다.",
  CARD_NUMBER_MAX_LENGTH: 4,
  CARD_TYPE_MAX_LENGTH: 2,
} as const;

export const CARD_TYPE = {
  visa: {
    START_NUMBER: 40,
    END_NUMBER: 49,
  },
  master: {
    START_NUMBER: 51,
    END_NUMBER: 55,
  },
  default: {},
} as const;

export type CardType = keyof typeof CARD_TYPE;

export type CardData = {
  [K in CardType]: (typeof CARD_TYPE)[K];
};

export interface UseCardNumbersReturn {
  cardNumbers: string[];
  cardNumbersError: string[];
  cardType: CardType;
  handleChange: (value: string, index: number) => void;
}

export default function useCardNumbersState(): UseCardNumbersReturn {
  const [cardNumbers, setCardNumbers] = useState(["", "", "", ""]);
  const [cardNumbersError, setError] = useState(["", "", "", ""]);
  const [cardType, setCardType] = useState<CardType>("default");

  const handleChange = (value: string, index: number) => {
    if (value.length > CARD_RULE.CARD_NUMBER_MAX_LENGTH) return;

    updateArrayAt({
      array: cardNumbers,
      newValue: value,
      index,
      setState: setCardNumbers,
    });

    if (index === 0) {
      setCardType(
        getCardType(Number(value.slice(0, CARD_RULE.CARD_TYPE_MAX_LENGTH)))
      );
    }

    const isInvalid =
      value.length > 0 && value.length < CARD_RULE.CARD_NUMBER_MAX_LENGTH;
    if (isInvalid) {
      updateArrayAt({
        array: cardNumbersError,
        newValue: CARD_RULE.INVALID_CARD_NUMBER_LENGTH,
        index,
        setState: setError,
      });
    } else {
      updateArrayAt({
        array: cardNumbersError,
        newValue: "",
        index,
        setState: setError,
      });
    }
  };

  return {
    cardNumbers,
    cardNumbersError,
    cardType,
    handleChange,
  };
}

function getCardType(firstTwoDigits: number): CardType {
  if (
    firstTwoDigits >= CARD_TYPE.visa.START_NUMBER &&
    firstTwoDigits <= CARD_TYPE.visa.END_NUMBER
  )
    return "visa";
  if (
    firstTwoDigits >= CARD_TYPE.master.START_NUMBER &&
    firstTwoDigits <= CARD_TYPE.master.END_NUMBER
  )
    return "master";
  return "default";
}
