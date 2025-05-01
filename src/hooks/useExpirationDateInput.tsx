import { useState } from "react";
import {
  isNumber,
  isUnderMaxLength,
  isValidMonth,
} from "../validation/validate";
import { EXPIRATION_FIELDS, type ExpirationKey } from "../types/cardKeyTypes";
import { indexToExpirationKey } from "../utils/indexToExpirationKey";
import { useError } from "./useError";
import { CARD_INPUT_LIMIT } from "../constants/CardInputLimit";
import { moveFocusToNextInput } from "../utils/moveFocusToNextInput";
import { CARD_STEP } from "../constants/CardStep";

const EXPIRATION_DATE_ERROR_MESSAGE = {
  INVALID_LENGTH_ERROR: `${CARD_INPUT_LIMIT.EXPIRATION_DATE_MAX_LENGTH}자리까지 입력 가능합니다.`,
  NOT_NUMBERIC_ERROR: "숫자만 입력 가능합니다.",
  MONTH_RANGE_ERROR: `${CARD_INPUT_LIMIT.EXPIRATION_DATE_MIN_MONTH}부터 ${CARD_INPUT_LIMIT.EXPIRATION_DATE_MAX_MONTH} 사이의 숫자를 입력하세요.`,
} as const;

export const EXPIRATION_DATE: Record<ExpirationKey, string> = {
  YEAR: "",
  MONTH: "",
};

const EXPIRATION_DATE_ERROR: Record<ExpirationKey, string> = {
  YEAR: "",
  MONTH: "",
};

export default function useExpirationDateInput(handleStep: () => void) {
  const [cardExpirationDate, setcardExpirationDate] = useState(EXPIRATION_DATE);
  const { error: cardExpirationDateError, setErrorMessage } =
    useError<ExpirationKey>(EXPIRATION_DATE_ERROR);

  const onExpirationDateChange = (
    value: string,
    index: number,
    step: number,
    inputRefs: React.MutableRefObject<HTMLInputElement[]>
  ) => {
    const expirationKey = indexToExpirationKey(index);

    const { errorMessage, key } = validateExpirationDate(value, expirationKey);
    setErrorMessage(errorMessage, key);
    if (errorMessage) return;

    const newDate = { ...cardExpirationDate, [key]: value };
    setcardExpirationDate(newDate);

    if (value.length < CARD_INPUT_LIMIT.EXPIRATION_DATE_MAX_LENGTH) return;

    moveFocusToNextInput(inputRefs, EXPIRATION_FIELDS.length, index);

    const canStepForward =
      step === CARD_STEP.EXPIRATION &&
      index === EXPIRATION_FIELDS.length - 1 &&
      Object.values(cardExpirationDateError).every((msg) => msg === "") &&
      value.length === CARD_INPUT_LIMIT.EXPIRATION_DATE_MAX_LENGTH;

    if (canStepForward) handleStep();
  };

  return {
    cardExpirationDate,
    cardExpirationDateError,
    onExpirationDateChange,
  };
}

const validateExpirationDate = (value: string, key: ExpirationKey) => {
  if (
    !isUnderMaxLength(value.length, CARD_INPUT_LIMIT.EXPIRATION_DATE_MAX_LENGTH)
  ) {
    return {
      errorMessage: EXPIRATION_DATE_ERROR_MESSAGE.INVALID_LENGTH_ERROR,
      key: key,
    };
  }

  if (!isNumber(value)) {
    return {
      errorMessage: EXPIRATION_DATE_ERROR_MESSAGE.NOT_NUMBERIC_ERROR,
      key: key,
    };
  }

  if (
    key === "MONTH" &&
    value.length === CARD_INPUT_LIMIT.EXPIRATION_DATE_MAX_LENGTH &&
    !isValidMonth(Number(value))
  ) {
    return {
      errorMessage: EXPIRATION_DATE_ERROR_MESSAGE.MONTH_RANGE_ERROR,
      key: key,
    };
  }

  if (
    key === "YEAR" &&
    value.length === CARD_INPUT_LIMIT.EXPIRATION_DATE_MAX_LENGTH
  ) {
    const currentYear = new Date().getFullYear() % 100;
    if (Number(value) < currentYear) {
      return {
        errorMessage: `유효한 년도가 아닙니다. ${currentYear}년 이후의 년도를 입력하세요.`,
        key: key,
      };
    }
  }

  return { errorMessage: "", key: key };
};
