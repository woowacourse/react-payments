import { useState } from "react";
import { replaceAt } from "./replaceAt";

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

interface UseCardNumbersReturn {
  cardNumbers: string[];
  cardNumbersError: string[];
  cardType: CardType;
  cardNumbersValidate: (value: string, index: number) => void;
}

export default function useCardNumbers(): UseCardNumbersReturn {
  const [cardNumbers, setCardNumbers] = useState(["", "", "", ""]);
  const [cardNumbersError, setError] = useState(["", "", "", ""]);
  const [cardType, setCardType] = useState<CardType>("default");

  const cardNumbersValidate = (value: string, index: number) => {
    const newCardNumbers = [...cardNumbers];
    newCardNumbers[index] = value.slice(
      0,
      CONSTANT_USE_CARD_NUMBER.CARD_NUMBER_MAX_LENGTH
    );

    if (
      !isValidLength(
        value.length,
        CONSTANT_USE_CARD_NUMBER.CARD_NUMBER_MAX_LENGTH
      )
    ) {
      replaceAt({
        array: cardNumbersError,
        newValue: CARD_RULE.INVALID_CARD_NUMBER_LENGTH,
        index: index,
        setState: setError,
      });
      return;
    }

    setCardNumbers(newCardNumbers);
    setCardType(
      getCardType(
        Number(value.slice(0, CONSTANT_USE_CARD_NUMBER.CARD_TYPE_MAX_LENGTH))
      )
    );

    replaceAt({
      array: cardNumbersError,
      newValue: "",
      index: index,
      setState: setError,
    });
  };

  return { cardNumbers, cardType, cardNumbersError, cardNumbersValidate };
}

function getCardType(firstTwoDigits: number): CardType {
  if (
    firstTwoDigits >= CARD_TYPE.visa.START_NUMBER &&
    firstTwoDigits <= CARD_TYPE.visa.END_NUMBER
  ) {
    return "visa";
  } else if (
    firstTwoDigits >= CARD_TYPE.master.START_NUMBER &&
    firstTwoDigits <= CARD_TYPE.master.END_NUMBER
  ) {
    return "master";
  } else {
    return "default";
  }
}
