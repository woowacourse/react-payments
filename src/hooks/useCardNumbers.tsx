import { useState } from "react";
import { isValidLength } from "../validation/validate";
import { replaceAt } from "../utils/setErrorMessage";

const CONSTANT_USE_CARD_NUMBER = {
  IS_VALID_LENGTH_ERROR: "카드 번호는 4자리 숫자여야 합니다.",
  CARD_NUMBER_MAX_LENGTH: 4,
  CARD_TYPE_MAX_LENGTH: 2,
} as const;

// CardType은 객체 키에서 자동 추출되도록
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

export type CardType = keyof typeof CARD_TYPE; // "visa" | "master" | "default"

export type CardData = {
  [K in CardType]: (typeof CARD_TYPE)[K];
};

export default function useCardNumbers() {
  const [cardNumbers, setCardNumbers] = useState(["", "", "", ""]);
  const [cardNumbersError, setError] = useState(["", "", "", ""]);
  const [cardType, setCardType] = useState<CardType>("default");

  const cardNumbersValidate = (value: string, index: number) => {
    const newCardNumbers = [...cardNumbers];
    newCardNumbers[index] = value.slice(
      0,
      CONSTANT_USE_CARD_NUMBER.CARD_NUMBER_MAX_LENGTH
    );
    setCardNumbers(newCardNumbers);
    setCardType(
      getCardType(
        Number(value.slice(0, CONSTANT_USE_CARD_NUMBER.CARD_TYPE_MAX_LENGTH))
      )
    );

    if (
      !isValidLength(
        value.length,
        CONSTANT_USE_CARD_NUMBER.CARD_NUMBER_MAX_LENGTH
      )
    ) {
      replaceAt({
        array: cardNumbersError,
        newValue: CONSTANT_USE_CARD_NUMBER.IS_VALID_LENGTH_ERROR,
        index: index,
        setState: setError,
      });
      return;
    }

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
