import { useState } from "react";
import { isValidMonth } from "../validation/validate";
import { replaceAt } from "./replaceAt";

export const USE_EXPIRATION_DATE = {
  INVALID_LENGTH: "2자리까지 입력 가능합니다.",
  INVALID_MONTH_RANGE: "1부터 12 사이의 숫자를 입력하세요.",
  MAX_LENGTH: 2,
} as const;

interface UseExpirationDateReturn {
  cardExpirationDate: {
    month: string;
    year: string;
  };
  cardExpirationDateError: string[];
  dateValidate: (value: string, index: number) => void;
}

export default function useExpirationDate(): UseExpirationDateReturn {
  const [cardExpirationDate, setCardExpirationDate] = useState({
    month: "",
    year: "",
  });
  const [cardExpirationDateError, setError] = useState(["", ""]);

  const dateValidate = (value: string, index: number) => {
    const newValue = value.slice(0, CONSTANT_USE_EXPIRATION_DATE.MAX_LENGTH);
    const key = index === 0 ? "month" : "year";

    if (!isValidLength(value.length, CONSTANT_USE_EXPIRATION_DATE.MAX_LENGTH)) {
      replaceAt({
        array: cardExpirationDateError,
        newValue: CONSTANT_USE_EXPIRATION_DATE.IS_VALID_LENGTH_ERROR,
        index: index,
        setState: setError,
      });
      return;
    }

    if (
      index === 0 &&
      value.length === CONSTANT_USE_EXPIRATION_DATE.MAX_LENGTH &&
      !isValidMonth(Number(value))
    ) {
      replaceAt({
        array: cardExpirationDateError,
        newValue: CONSTANT_USE_EXPIRATION_DATE.MONTH_RANGE_ERROR,
        index: index,
        setState: setError,
      });
      return;
    }

    setCardExpirationDate((prev) => ({
      ...prev,
      [key]: newValue,
    }));

    replaceAt({
      array: cardExpirationDateError,
      newValue: "",
      index: index,
      setState: setError,
    });
  };

  return {
    cardExpirationDate,
    cardExpirationDateError,
    dateValidate,
  };
}
