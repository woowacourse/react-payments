import { useState } from "react";
import {
  isInputFilled,
  isMonthValid,
  isYearValid,
} from "../../../utils/validate";
import { INPUT_FULL_LENGTH } from "../../../constant/cardInput";

export const useValidation = () => {
  const [inputValidity, setInputValidity] = useState({
    numbers: false,
    expiryDate: false,
    CVC: false,
    password: false,
  });

  const validateNumbersInput = (numbers: string[]) => {
    const isNumbersValid = isInputFilled(
      numbers.join(""),
      INPUT_FULL_LENGTH.CARD_NUMBERS
    );
    setInputValidity((prev) => ({ ...prev, numbers: isNumbersValid }));

    return isNumbersValid;
  };

  const validateExpiryDateInput = (expiryDate: string) => {
    const [month, year] = expiryDate.split(" / ");

    const isExpiryDateValid =
      isInputFilled(month + year, INPUT_FULL_LENGTH.EXPIRY_DATE) &&
      isMonthValid(Number(month)) &&
      isYearValid(Number(year));

    setInputValidity((prev) => ({ ...prev, expiryDate: isExpiryDateValid }));

    return isExpiryDateValid;
  };

  const validateCVCInput = (CVC: number) => {
    const isCVCValid = isInputFilled(String(CVC), INPUT_FULL_LENGTH.CVC);
    setInputValidity((prev) => ({ ...prev, CVC: isCVCValid }));

    return isCVCValid;
  };

  const validatePasswordInput = (password: string[]) => {
    const isPasswordValid = isInputFilled(
      password.join(""),
      INPUT_FULL_LENGTH.PASSWORDS
    );
    setInputValidity((prev) => ({ ...prev, password: isPasswordValid }));

    return isPasswordValid;
  };

  const isEveryInputValid = () => {
    return Object.entries(inputValidity).every(([_, isValid]) => isValid);
  };

  return {
    isEveryInputValid,
    validateNumbersInput,
    validateExpiryDateInput,
    validateCVCInput,
    validatePasswordInput,
  };
};
