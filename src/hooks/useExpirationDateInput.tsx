import { useState } from "react";
import {
  isNumber,
  isUnderMaxLength,
  isValidMonth,
} from "../validation/validate";
import type { ExpirationKey } from "../types/cardKeyTypes";
import { indexToExpirationKey } from "../utils/indexToExpirationKey";
import { useError } from "./useError";

const EXPIRATION_DATE_LIMIT = {
  MAX_LENGTH: 3,
  MIN_MONTH: 1,
  MAX_MONTH: 12,
};
const EXPIRATION_DATE_ERROR_MESSAGE = {
  INVALID_LENGTH_ERROR: `${EXPIRATION_DATE_LIMIT.MAX_LENGTH}자리까지 입력 가능합니다.`,
  NOT_NUMBERIC_ERROR: "숫자만 입력 가능합니다.",
  MONTH_RANGE_ERROR: `${EXPIRATION_DATE_LIMIT.MIN_MONTH}부터 ${EXPIRATION_DATE_LIMIT.MAX_MONTH} 사이의 숫자를 입력하세요.`,
} as const;

export const EXPIRATION_DATE: Record<ExpirationKey, string> = {
  YEAR: "",
  MONTH: "",
};

const EXPIRATION_DATE_ERROR: Record<ExpirationKey, string> = {
  YEAR: "",
  MONTH: "",
};

export default function useExpirationDateInput() {
  const [cardExpirationDate, setcardExpirationDate] = useState(EXPIRATION_DATE);
  const { error: cardExpirationDateError, setErrorMessage } =
    useError<ExpirationKey>(EXPIRATION_DATE_ERROR);

  const validateExpirationDate = (value: string, key: ExpirationKey) => {
    if (!isUnderMaxLength(value.length, EXPIRATION_DATE_LIMIT.MAX_LENGTH)) {
      setErrorMessage(EXPIRATION_DATE_ERROR_MESSAGE.INVALID_LENGTH_ERROR, key);
      return false;
    }

    if (!isNumber(value)) {
      setErrorMessage(EXPIRATION_DATE_ERROR_MESSAGE.NOT_NUMBERIC_ERROR, key);
      return false;
    }

    if (
      key === "MONTH" &&
      value.length === EXPIRATION_DATE_LIMIT.MAX_LENGTH &&
      !isValidMonth(Number(value))
    ) {
      setErrorMessage(EXPIRATION_DATE_ERROR_MESSAGE.MONTH_RANGE_ERROR, key);
      return false;
    }

    if (key === "YEAR" && value.length === EXPIRATION_DATE_LIMIT.MAX_LENGTH) {
      const currentYear = new Date().getFullYear() % 100;
      if (Number(value) < currentYear) {
        setErrorMessage(
          `유효한 년도가 아닙니다. ${currentYear}년 이후의 년도를 입력하세요.`,
          key
        );
        return false;
      }
    }

    setErrorMessage("", key);
    return true;
  };

  const onExpirationDateChange = (value: string, index: number) => {
    const key = indexToExpirationKey(index);
    if (!validateExpirationDate(value, key)) return;
    const newDate = { ...cardExpirationDate, [key]: value };
    setcardExpirationDate(newDate);
  };

  return {
    cardExpirationDate,
    cardExpirationDateError,
    onExpirationDateChange,
  };
}
