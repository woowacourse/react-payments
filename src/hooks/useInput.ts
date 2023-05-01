import { useState } from "react";
import { InputValidator } from "../types/Validate";

const useInput = (validator?: InputValidator) => {
  const [inputValue, setInputValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const onChange = (inputValue: string) => {
    const { hasError, message, isAllowInput } = validator?.(inputValue) ?? { hasError: false, message: "" };

    if (hasError) {
      setErrorMessage(message || "");

      if (isAllowInput) setInputValue(inputValue);
      return;
    }

    setInputValue(inputValue);
    setErrorMessage("");
  };

  return { inputValue, errorMessage, setErrorMessage, onChange };
};

export default useInput;
