import { useState } from "react";
import { isNumber, isValidLength, isValidMonth } from "../validation/validate";
import { setErrorMessage } from "../utils/setErrorMessage";

const EXPIRATION_DATE = {
  MAX_LENGTH: 2,
  MIN_MONTH: 1,
  MAX_MONTH: 12,
};
const EXPIRATION_DATE_ERROR = {
  INVALID_LENGTH_ERROR: `${EXPIRATION_DATE.MAX_LENGTH}자리까지 입력 가능합니다.`,
  NOT_NUMBERIC_ERROR: "숫자만 입력 가능합니다.",
  MONTH_RANGE_ERROR: `${EXPIRATION_DATE.MIN_MONTH}부터 ${EXPIRATION_DATE.MAX_MONTH} 사이의 숫자를 입력하세요.`,
} as const;

export default function useExpirationDate() {
  const [cardExpirationDate, setcardExpirationDate] = useState(["", ""]);
  const [cardExpirationDateError, setError] = useState(["", ""]);

  const dateValidate = (value: string, index: number) => {
    const newDate = [...cardExpirationDate];
    newDate[index] = value.slice(0, EXPIRATION_DATE.MAX_LENGTH);
    setcardExpirationDate(newDate);

    if (!isValidLength(value.length, EXPIRATION_DATE.MAX_LENGTH)) {
      setErrorMessage(
        cardExpirationDateError,
        EXPIRATION_DATE_ERROR.INVALID_LENGTH_ERROR,
        index,
        setError
      );
      return;
    }

    if (!isNumber(value)) {
      setErrorMessage(
        cardExpirationDateError,
        EXPIRATION_DATE_ERROR.NOT_NUMBERIC_ERROR,
        index,
        setError
      );
      return;
    }

    if (
      index === 0 &&
      value.length === EXPIRATION_DATE.MAX_LENGTH &&
      !isValidMonth(Number(value))
    ) {
      setErrorMessage(
        cardExpirationDateError,
        EXPIRATION_DATE_ERROR.MONTH_RANGE_ERROR,
        index,
        setError
      );
      return;
    }

    setErrorMessage(cardExpirationDateError, "", index, setError);
  };

  return {
    cardExpirationDate,
    cardExpirationDateError,
    dateValidate,
  };
}
