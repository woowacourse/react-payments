import { useState } from "react";
import { InputValidator } from "../types/Validate";

const useInput = (onChangeValidator?: InputValidator) => {
  const [inputValue, setInputValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const validateInput = (inputValue: string) => {
    const { hasError, message, isAllowInput } = onChangeValidator?.(inputValue) ?? { hasError: false, message: "" };

    if (hasError) {
      setErrorMessage(message || "");

      if (isAllowInput) setInputValue(inputValue);
      return;
    }
  };

  const onChange = (inputValue: string) => {
    validateInput(inputValue);

    setInputValue(inputValue);
    setErrorMessage("");
  };

  return { inputValue, errorMessage, onChange, validateInput };
};

export default useInput;
