import { useState } from "react";
import useError from "./useError";
import isNumber from "./validate/isNumber";
import isValidStringLength from "./validate/isValidStringLength";
import {
  CardNumbers,
  CardNumbersKeys,
  CardNumbersOptions,
  IsError,
} from "../types/CardNumbers";

const INITIAL_CARD_NUMBER: CardNumbers = {
  firstNumber: "",
  secondNumber: "",
  thirdNumber: "",
  fourthNumber: "",
};

const INITIAL_IS_ERROR: IsError = {
  firstNumber: false,
  secondNumber: false,
  thirdNumber: false,
  fourthNumber: false,
};

const useCardNumbers = (): CardNumbersOptions => {
  const [cardNumbers, setCardNumbers] = useState(INITIAL_CARD_NUMBER);
  const { error, setErrorField, clearError } = useError(INITIAL_IS_ERROR);

  const getCardNumbersValidationResult = (input: string) => {
    if (!isNumber(input)) {
      return { isError: true, errorMessage: "숫자만 입력 가능합니다" };
    }

    if (!isValidStringLength({ value: input, maxLength: 4 })) {
      return { isError: true, errorMessage: "4자리 숫자만 입력 가능합니다" };
    }

    return { isError: false, errorMessage: "" };
  };

  const handleCardNumbersChange =
    (target: CardNumbersKeys) =>
    (value: string, index: number, moveFocus: (index: number) => void) => {
      const { isError, errorMessage } = getCardNumbersValidationResult(
        value.trim()
      );
      if (isError) {
        setErrorField(target, errorMessage);
        return;
      }

      clearError(target);
      setCardNumbers({
        ...cardNumbers,
        [target]: value.trim(),
      });

      if (value.trim().length === 4) {
        moveFocus(index);
      }
    };

  return {
    cardNumbers,
    handleCardNumbersChange,
    isError: error.isError,
    errorMessage: error.errorMessage,
  };
};
export default useCardNumbers;
