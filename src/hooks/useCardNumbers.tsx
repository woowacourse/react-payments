import { useState } from "react";
import { isNumber, isUnderMaxLength } from "../validation/validate";
import { setErrorMessage } from "../utils/setErrorMessage";
import { getCardType } from "../utils/getCardType";

const CARD_NUMBER = {
  CARD_NUMBER_MAX_LENGTH: 4,
  CARD_TYPE_MAX_LENGTH: 2,
} as const;

const CARD_NUMBER_ERROR = {
  INVALID_LENGTH_ERROR: `카드 번호는 자리 ${CARD_NUMBER.CARD_NUMBER_MAX_LENGTH}숫자여야 합니다.`,
  NOT_NUMBERIC_ERROR: "숫자만 입력 가능합니다.",
} as const;

export default function useCardNumbers() {
  const [cardNumbers, setCardNumbers] = useState(["", "", "", ""]);
  const [cardNumbersError, setError] = useState(["", "", "", ""]);
  const [cardType, setCardType] = useState("default");

  const validateCardNumbers = (value: string, index: number) => {
    if (!isUnderMaxLength(value.length, CARD_NUMBER.CARD_NUMBER_MAX_LENGTH)) {
      setErrorMessage(
        cardNumbersError,
        CARD_NUMBER_ERROR.INVALID_LENGTH_ERROR,
        index,
        setError
      );
      return false;
    }

    if (!isNumber(value)) {
      setErrorMessage(
        cardNumbersError,
        CARD_NUMBER_ERROR.NOT_NUMBERIC_ERROR,
        index,
        setError
      );
      return false;
    }

    setErrorMessage(cardNumbersError, "", index, setError);
    return true;
  };

  const onCardNumberChange = (value: string, index: number) => {
    if (!validateCardNumbers(value, index)) return;
    const trimmedValue = value.slice(0, CARD_NUMBER.CARD_NUMBER_MAX_LENGTH);

    const newCardNumbers = [...cardNumbers];
    newCardNumbers[index] = trimmedValue;
    setCardNumbers(newCardNumbers);

    setCardType(
      getCardType(Number(value.slice(0, CARD_NUMBER.CARD_TYPE_MAX_LENGTH)))
    );
  };

  return { cardNumbers, cardType, cardNumbersError, onCardNumberChange };
}
