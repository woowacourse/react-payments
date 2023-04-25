import { useState } from "react";
import { isInputFilled, isMonthValid, isYearValid } from "../utils/validate";

export const useValidation = () => {
  const [inputValidity, setInputValidity] = useState({
    numbers: false,
    expiryDate: false,
    CVC: false,
    password: false,
  });

  const validateNumbersInput = (numbers: string[]) => {
    const isNumbersValid = isInputFilled(numbers.join(""), 16);
    setInputValidity((prev) => ({ ...prev, numbers: isNumbersValid }));

    return isNumbersValid;
  };

  const validateExpiryDateInput = (expiryDate: string) => {
    const [month, year] = expiryDate.split(" / ");

    const isExpiryDateValid =
      isInputFilled(month + year, 4) &&
      isMonthValid(Number(month)) &&
      isYearValid(Number(year));

    setInputValidity((prev) => ({ ...prev, expiryDate: isExpiryDateValid }));

    return isExpiryDateValid;
  };

  const validateCVCInput = (CVC: number) => {
    const isCVCValid = isInputFilled(String(CVC), 3);
    setInputValidity((prev) => ({ ...prev, CVC: isCVCValid }));

    return isCVCValid;
  };

  const validatePasswordInput = (password: string[]) => {
    const isPasswordValid = isInputFilled(password.join(""), 2);
    setInputValidity((prev) => ({ ...prev, password: isPasswordValid }));

    return isPasswordValid;
  };

  return {
    inputValidity,
    validateNumbersInput,
    validateExpiryDateInput,
    validateCVCInput,
    validatePasswordInput,
  };
};
