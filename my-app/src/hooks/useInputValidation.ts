import { useState } from "react";

type ValidationResult = { errorIndex: number; message: string };

const useInputValidation = <T>(validator: (v: T) => ValidationResult, inputValue: T) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [errorIndex, setErrorIndex] = useState(-1);

  const clearError = () => setErrorMessage("");
  const handleBlur = () => {
    const { errorIndex, message } = validator(inputValue);
    setErrorIndex(errorIndex);
    setErrorMessage(message);
  };

  return { errorMessage, errorIndex, clearError, handleBlur };
};

export default useInputValidation;
