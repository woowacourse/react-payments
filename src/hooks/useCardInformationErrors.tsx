import { useState } from "react";

const ERROR_MESSAGE = {
  IS_NOT_NUMBER: "숫자값만 입력해주세요.",
  MM_VALID: "유효한 월(1~12)만 입력해주세요.",
  YY_VALID: "유효한 년도(25~)만 입력해주세요.",
};

const useCardInformationErrors = () => {
  const [isErrors, setIsErrors] = useState({
    uniqueNumber: [false, false, false, false],
    expirationDate: [false, false],
    cvcNumber: [false],
  });

  const [errorMessage, setErrorMessage] = useState({
    uniqueNumber: "",
    expirationDate: "",
    cvcNumber: "",
  });

  const validateInput = (type: "uniqueNumber" | "expirationDate" | "cvcNumber", index: number, value: string) => {
    const isNumberOnly = /^[0-9]*$/.test(value);

    const getValidationResult = (): { error: boolean; message: string } => {
      if (!isNumberOnly) {
        return { error: true, message: ERROR_MESSAGE.IS_NOT_NUMBER };
      }

      if (type === "expirationDate") {
        const num = parseInt(value);
        if (index === 0 && (num < 1 || num > 12)) {
          return { error: true, message: ERROR_MESSAGE.MM_VALID };
        }
        if (index === 1 && num < 25) {
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
