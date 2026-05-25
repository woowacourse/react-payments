import { useState } from "react";
import type { ValidationResult } from "@/types";

const useInputValidation = <T>(validator: (v: T) => ValidationResult, inputValue: T) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [errorIndex, setErrorIndex] = useState(-1);

  const clearError = () => {
    setErrorMessage("");
    setErrorIndex(-1);
  };
  const validate = (value: T) => {
    const { errorIndex, message } = validator(value);
    setErrorIndex(errorIndex);
    setErrorMessage(message);
  };

  const handleBlur = () => validate(inputValue);

  return { errorMessage, errorIndex, clearError, handleBlur, validate };
};

export default useInputValidation;
