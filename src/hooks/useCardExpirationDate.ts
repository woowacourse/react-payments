import { useState } from "react";

import useError from "./useError";

import isNumber from "./validate/isNumber";
import isValidStringLength from "./validate/isValidStringLength";
import { validateMonth, validateYear } from "./validate/validateDate";

import CardExpirationDate from "../types/CardExpirationDate";
import {
  CardExpirationDateKeys,
  CardExpirationDateOptions,
  IsError,
} from "../types/CardExpirationDateOptions";

const INITIAL_CARD_EXPIRATION_DATE: CardExpirationDate = {
  month: "",
  year: "",
};

const INITIAL_IS_ERROR: IsError = {
  month: false,
  year: false,
};

const useCardExpirationDate = (): CardExpirationDateOptions => {
  const [cardExpirationDate, setCardExpirationDate] = useState(
    INITIAL_CARD_EXPIRATION_DATE
  );
  const { error, setErrorField, clearError } = useError(INITIAL_IS_ERROR);

  const getCardExpirationDateValidationResult = (
    target: CardExpirationDateKeys,
    input: string
  ) => {
    if (input.length === 1 && !isNumber(input))
      return { isError: true, errorMessage: "숫자만 입력 가능합니다" };

    if (input.length < 2) return { isError: false, errorMessage: "" };

    if (!isNumber(input)) {
      return { isError: true, errorMessage: "숫자만 입력 가능합니다" };
    }

    if (!isValidStringLength({ value: input, maxLength: 2 })) {
      return { isError: true, errorMessage: "2자리 숫자만 입력 가능합니다" };
    }

    if (target === "month") {
      return validateMonth({
        month: Number(input),
        year: Number(cardExpirationDate.year),
      });
    }

    if (target === "year") {
      return validateYear({
        month: Number(cardExpirationDate.month),
        year: Number(input),
      });
    }

    return { isError: false, errorMessage: "" };
  };

  const handleCardExpirationDateChange =
    (target: CardExpirationDateKeys) =>
    (value: string, index: number, moveFocus: (index: number) => void) => {
      const { isError, errorMessage } = getCardExpirationDateValidationResult(
        target,
        value.trim()
      );
      if (isError) {
        setErrorField(target, errorMessage);
        return;
      }

      clearError(target);
      setCardExpirationDate({
        ...cardExpirationDate,
        [target]: value.trim(),
      });

      if (value.trim().length === 2) {
        moveFocus(index);
      }
    };

  return {
    cardExpirationDate,
    handleCardExpirationDateChange,
    isError: error.isError,
    errorMessage: error.errorMessage,
  };
};
export default useCardExpirationDate;
