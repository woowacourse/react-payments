import { useState } from "react";
import { isValidMonth } from "../../validation/validate";
import { updateArrayAt } from "../../utils/updateArrayAt";

export const USE_EXPIRATION_DATE = {
  INVALID_LENGTH: "2자리까지 입력 가능합니다.",
  INVALID_MONTH_RANGE: "1부터 12 사이의 숫자를 입력하세요.",
  MAX_LENGTH: 2,
} as const;

export const getExpirationErrorMessage = (value: string, index: number) => {
  if (value.length > 0 && value.length < USE_EXPIRATION_DATE.MAX_LENGTH) {
    return USE_EXPIRATION_DATE.INVALID_LENGTH;
  }

  if (
    index === 0 &&
    value.length === USE_EXPIRATION_DATE.MAX_LENGTH &&
    !isValidMonth(Number(value))
  ) {
    return USE_EXPIRATION_DATE.INVALID_MONTH_RANGE;
  }

  return "";
};

export default function useExpirationDateState() {
  const [cardExpirationDate, setCardExpirationDate] = useState(["", ""]);
  const [cardExpirationDateError, setError] = useState(["", ""]);

  const dateValidate = (value: string, index: number) => {
    if (value.length > USE_EXPIRATION_DATE.MAX_LENGTH) return;

    updateArrayAt({
      array: cardExpirationDate,
      newValue: value,
      index,
      setState: setCardExpirationDate,
    });

    const errorMessage = getExpirationErrorMessage(value, index);
    updateArrayAt({
      array: cardExpirationDateError,
      newValue: errorMessage,
      index,
      setState: setError,
    });
  };

  const [monthValue, yearValue] = cardExpirationDate;
  const [monthErrorMessage, yearErrorMessage] = cardExpirationDateError;

  return {
    cardExpirationDate,
    cardExpirationDateError,
    dateValidate,
    monthValue,
    yearValue,
    monthErrorMessage,
    yearErrorMessage,
  };
}
