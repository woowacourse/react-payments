import { useState } from "react";
import { MAX_MONTH, MIN_MONTH, MIN_YEAR, NUMBER_ONLY_REGEX } from "../constants/constant";
import { CardInformationErrorType, ErrorMessageType } from "../types/CardInformationErrorType";

const ERROR_MESSAGE = {
  IS_NOT_NUMBER: "숫자값만 입력해주세요.",
  MM_VALID: "유효한 월(1~12)만 입력해주세요.",
  YY_VALID: "유효한 년도(25~)만 입력해주세요.",
};

const initialCardInformationErrors: CardInformationErrorType = {
  uniqueNumber: [false, false, false, false],
  expirationDate: [false, false],
  cvcNumber: [false],
};

const initialCardInformationErrorMessage: ErrorMessageType = {
  uniqueNumber: "",
  expirationDate: "",
  cvcNumber: "",
};

const useCardInformationErrors = () => {
  const [isErrors, setIsErrors] = useState<CardInformationErrorType>(initialCardInformationErrors);
  const [errorMessage, setErrorMessage] = useState<ErrorMessageType>(initialCardInformationErrorMessage);

  const validateInput = (type: "uniqueNumber" | "expirationDate" | "cvcNumber", index: number, value: string) => {
    const isNumberOnly = NUMBER_ONLY_REGEX.test(value);

    const getValidationResult = (): { error: boolean; message: string } => {
      if (!isNumberOnly) {
        return { error: true, message: ERROR_MESSAGE.IS_NOT_NUMBER };
      }

      if (type === "expirationDate") {
        const num = parseInt(value);
        if (index === 0 && (num < MIN_MONTH || num > MAX_MONTH)) {
          return { error: true, message: ERROR_MESSAGE.MM_VALID };
        }
        if (index === 1 && num < MIN_YEAR) {
          return { error: true, message: ERROR_MESSAGE.YY_VALID };
        }
      }

      return { error: false, message: "" };
    };

    const { error, message } = getValidationResult();

    setIsErrors((prev) => {
      const updated = prev[type];
      updated[index] = error;
      return { ...prev, [type]: updated };
    });

    setErrorMessage((prev) => ({
      ...prev,
      [type]: error ? message : "",
    }));
  };

  return { isErrors, errorMessage, validateInput };
};

export default useCardInformationErrors;
