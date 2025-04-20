import { useState } from "react";
import { isNumber, isValidLength } from "../validation/validate";
import { setErrorMessage } from "../utils/setErrorMessage";

const CARD_NUMBER = {
  CARD_NUMBER_MAX_LENGTH: 4,
  CARD_TYPE_MAX_LENGTH: 2,
} as const;

const CARD_NUMBER_ERROR = {
  INVALID_LENGTH_ERROR: `카드 번호는 자리 ${CARD_NUMBER.CARD_NUMBER_MAX_LENGTH}숫자여야 합니다.`,
  NOT_NUMBERIC_ERROR: "숫자만 입력 가능합니다.",
} as const;

const CARD_TYPE = {
  VISA: {
    NAME: "visa",
    START_NUMBER: 40,
    END_NUMBER: 49,
  },
  MASTER: {
    NAME: "master",
    START_NUMBER: 51,
    END_NUMBER: 55,
  },
  DEFAULT: {
    NAME: "default",
  },
} as const;

export default function useCardNumbers() {
  const [cardNumbers, setCardNumbers] = useState(["", "", "", ""]);
  const [cardNumbersError, setError] = useState(["", "", "", ""]);
  const [cardType, setCardType] = useState("default");

  const cardNumbersValidate = (value: string, index: number) => {
    const newCardNumbers = [...cardNumbers];
    newCardNumbers[index] = value.slice(0, CARD_NUMBER.CARD_NUMBER_MAX_LENGTH);
    setCardNumbers(newCardNumbers);
    setCardType(
      getCardType(Number(value.slice(0, CARD_NUMBER.CARD_TYPE_MAX_LENGTH)))
    );

    if (!isValidLength(value.length, CARD_NUMBER.CARD_NUMBER_MAX_LENGTH)) {
      setErrorMessage(
        cardNumbersError,
        CARD_NUMBER_ERROR.INVALID_LENGTH_ERROR,
        index,
        setError
      );
      return;
    }

    if (!isNumber(value)) {
      setErrorMessage(
        cardNumbersError,
        CARD_NUMBER_ERROR.NOT_NUMBERIC_ERROR,
        index,
        setError
      );
      return;
    }

    setErrorMessage(cardNumbersError, "", index, setError);
  };

  return { cardNumbers, cardType, cardNumbersError, cardNumbersValidate };
}

function getCardType(firstTwoDigits: number) {
  if (
    firstTwoDigits >= CARD_TYPE.VISA.START_NUMBER &&
    firstTwoDigits <= CARD_TYPE.VISA.END_NUMBER
  ) {
    return CARD_TYPE.VISA.NAME;
  } else if (
    firstTwoDigits >= CARD_TYPE.MASTER.START_NUMBER &&
    firstTwoDigits <= CARD_TYPE.MASTER.END_NUMBER
  ) {
    return CARD_TYPE.MASTER.NAME;
  } else {
    return CARD_TYPE.DEFAULT.NAME;
  }
}
