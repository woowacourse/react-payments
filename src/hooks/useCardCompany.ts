import { useState } from "react";
import useError from "./useError";

type useCardCompanyOptions = {
  cardCompany: string;
  handleCardCompanyChange: (
    value: string,
    index: number,
    moveFocus: (index: number) => void
  ) => void;
  isError: IsError;
  errorMessage: string;
};

type IsError = {
  cardCompany: boolean;
};

const INITIAL_IS_ERROR: IsError = {
  cardCompany: false,
};

const getCardCompanyChangeValidationResult = (input: string) => {
  if (input.length === 0) {
    return { isError: true, errorMessage: "카드사를 선택해주세요" };
  }
  return { isError: false, errorMessage: "" };
};

const useCardCompany = (): useCardCompanyOptions => {
  const [cardCompany, setCardCompany] = useState<string>("");
  const { error, setErrorField, clearError } = useError(INITIAL_IS_ERROR);

  const handleCardCompanyChange = (
    value: string,
    index: number,
    moveFocus: (index: number) => void
  ) => {
    const { isError, errorMessage } = getCardCompanyChangeValidationResult(
      value.trim()
    );

    if (isError) {
      setErrorField("cardCompany", errorMessage);
      return;
    }

    clearError("cardCompany");
    setCardCompany(value.trim());

    if (value.trim().length > 1) {
      moveFocus(index);
    }
  };

  return {
    cardCompany,
    handleCardCompanyChange,
    isError: error.isError,
    errorMessage: error.errorMessage,
  };
};

export default useCardCompany;
