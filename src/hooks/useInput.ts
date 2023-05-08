import { useState } from "react";
import { InputValidator } from "../types/Validate";

const useInput = (onChangeValidator?: InputValidator, onBlurValidator?: InputValidator) => {
  const [inputValue, setInputValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const validateInput = (validator: InputValidator, inputValue: string) => {
    const { hasError, message, isAllowInput } = validator(inputValue);

    if (hasError) {
      setErrorMessage(message || "");

      if (isAllowInput) setInputValue(inputValue);
      return;
    }
  };

  const onChange = (inputValue: string) => {
    onChangeValidator && validateInput(onChangeValidator, inputValue);

    setInputValue(inputValue);
    setErrorMessage("");
  };

  const onBlur = () => {
    onBlurValidator && validateInput(onBlurValidator, inputValue);
  };

  return { inputValue, errorMessage, onChange, onBlur };
};

export default useInput;
