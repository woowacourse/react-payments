import { useState } from "react";

import useError from "./useError";
import isNumber from "./validate/isNumber";
import isValidStringLength from "./validate/isValidStringLength";

type useCardPasswordOptions = {
  cardPassword: string;
  handleCardPasswordChange: (value: string) => void;
  isError: IsError;
  errorMessage: string;
};

type IsError = {
  cardPassword: boolean;
};

const INITIAL_IS_ERROR: IsError = {
  cardPassword: false,
};

const useCardPassword = (): useCardPasswordOptions => {
  const [cardPassword, setCardPassword] = useState<string>("");
  const { error, setErrorField, clearError } = useError(INITIAL_IS_ERROR);

  const getCardPasswordChangeValidationResult = (input: string) => {
    if (!isNumber(input)) {
      return { isError: true, errorMessage: "숫자만 입력 가능합니다" };
    }

    if (!isValidStringLength({ value: input, maxLength: 2 })) {
      return { isError: true, errorMessage: "2자리 숫자만 입력 가능합니다" };
    }
    return { isError: false, errorMessage: "" };
  };

  const handleCardPasswordChange = (value: string) => {
    const { isError, errorMessage } = getCardPasswordChangeValidationResult(
      value.trim()
    );
    if (isError) {
      setErrorField("cardCompany", errorMessage);
      return;
    }
    clearError("cardCompany");
    setCardPassword(value.trim());
  };

  return {
    cardPassword,
    handleCardPasswordChange,
    isError: error.isError,
    errorMessage: error.errorMessage,
  };
};
export default useCardPassword;
