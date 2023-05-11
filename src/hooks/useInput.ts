import { useState } from "react";
import { InputValidator } from "../types/Validate";

const useInput = (onChangeValidator?: InputValidator, onBlurValidator?: InputValidator) => {
  const [inputValue, setInputValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const onChange = (inputValue: string) => {
    const { hasError, message, isAllowInput } = onChangeValidator?.(inputValue) ?? { hasError: false };

    if (hasError) {
      setErrorMessage(message || "");

      if (isAllowInput) setInputValue(inputValue);
      return;
    }

    setInputValue(inputValue);
    setErrorMessage("");
  };

  const onBlur = (inputValue: string) => {
    const { hasError, message } = onBlurValidator?.(inputValue) ?? { hasError: false };

    if (hasError) {
      setErrorMessage(message || "");
      return;
    }
  };

  return { inputValue, errorMessage, onChange, onBlur };
};

export default useInput;
