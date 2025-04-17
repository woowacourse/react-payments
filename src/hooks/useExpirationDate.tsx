import { useState } from "react";
import { isNumber, isValidLength, isValidMonth } from "../validation/validate";
import { replaceAt } from "../utils/setErrorMessage";

const CONSTANT_USE_EXPIRATION_DATE = {
  IS_VALID_LENGTH_ERROR: "2자리까지 입력 가능합니다.",
  IS_NUMBER_ERROR: "숫자만 입력 가능합니다.",
  MONTH_RANGE_ERROR: "1부터 12 사이의 숫자를 입력하세요.",
  MAX_LENGTH: 2,
} as const;

export default function useExpirationDate() {
  const [cardExpirationDate, setcardExpirationDate] = useState(["", ""]);
  const [cardExpirationDateError, setError] = useState(["", ""]);

  const dateValidate = (value: string, index: number) => {
    const newDate = [...cardExpirationDate];
    newDate[index] = value.slice(0, CONSTANT_USE_EXPIRATION_DATE.MAX_LENGTH);
    setcardExpirationDate(newDate);

    if (!isValidLength(value.length, CONSTANT_USE_EXPIRATION_DATE.MAX_LENGTH)) {
      replaceAt(
        cardExpirationDateError,
        CONSTANT_USE_EXPIRATION_DATE.IS_VALID_LENGTH_ERROR,
        index,
        setError
      );
      return;
    }

    if (!isNumber(value)) {
      replaceAt(
        cardExpirationDateError,
        CONSTANT_USE_EXPIRATION_DATE.IS_NUMBER_ERROR,
        index,
        setError
      );
      return;
    }

    if (
      index === 0 &&
      value.length === CONSTANT_USE_EXPIRATION_DATE.MAX_LENGTH &&
      !isValidMonth(Number(value))
    ) {
      replaceAt(
        cardExpirationDateError,
        CONSTANT_USE_EXPIRATION_DATE.MONTH_RANGE_ERROR,
        index,
        setError
      );
      return;
    }
    replaceAt(cardExpirationDateError, "", index, setError);
  };

  return {
    cardExpirationDate,
    cardExpirationDateError,
    dateValidate,
  };
}
