import { useState } from "react";
import { isNumber, isUnderMaxLength } from "../validation/validate";
import { setErrorMessage } from "../utils/setErrorMessage";
import { getCardType } from "../utils/getCardType";
import { indexToCardNumberKey } from "../utils/indexToCardNumberKey";
import type { CardKey } from "../types/cardKeyTypes";

const CARD_NUMBER_LIMIT = {
  CARD_NUMBER_MAX_LENGTH: 4,
  CARD_TYPE_MAX_LENGTH: 2,
} as const;

const CARD_NUMBER_ERROR_MESSAGE = {
  INVALID_LENGTH_ERROR: `카드 번호는 자리 ${CARD_NUMBER_LIMIT.CARD_NUMBER_MAX_LENGTH}숫자여야 합니다.`,
  NOT_NUMBERIC_ERROR: "숫자만 입력 가능합니다.",
} as const;

export const CARD_NUMBERS: Record<CardKey, string> = {
  FIRST: "",
  SECOND: "",
  THIRD: "",
  FOURTH: "",
};

const CARD_NUMBERS_ERROR: Record<CardKey, string> = {
  FIRST: "",
  SECOND: "",
  THIRD: "",
  FOURTH: "",
};

export default function useCardNumbersInput() {
  const [cardNumbers, setCardNumbers] = useState(CARD_NUMBERS);
  const [cardNumbersError, setError] = useState(CARD_NUMBERS_ERROR);
  const [cardType, setCardType] = useState("default");

  const validateCardNumbers = (value: string, key: CardKey) => {
    if (
      !isUnderMaxLength(value.length, CARD_NUMBER_LIMIT.CARD_NUMBER_MAX_LENGTH)
    ) {
      setErrorMessage(
        cardNumbersError,
        CARD_NUMBER_ERROR_MESSAGE.INVALID_LENGTH_ERROR,
        key,
        setError
      );
      return false;
    }

    if (!isNumber(value)) {
      setErrorMessage(
        cardNumbersError,
        CARD_NUMBER_ERROR_MESSAGE.NOT_NUMBERIC_ERROR,
        key,
        setError
      );
      return false;
    }

    setErrorMessage(cardNumbersError, "", key, setError);
    return true;
  };

  const onCardNumberChange = (value: string, index: number) => {
    const key = indexToCardNumberKey(index);
    if (!validateCardNumbers(value, key)) return;

    const trimmedValue = value.slice(
      0,
      CARD_NUMBER_LIMIT.CARD_NUMBER_MAX_LENGTH
    );

    const newCardNumbers = { ...cardNumbers, [key]: trimmedValue };
    setCardNumbers(newCardNumbers);

    if (key === "FIRST") {
      setCardType(
        getCardType(
          Number(value.slice(0, CARD_NUMBER_LIMIT.CARD_TYPE_MAX_LENGTH))
        )
      );
    }
  };

  return { cardNumbers, cardType, cardNumbersError, onCardNumberChange };
}
