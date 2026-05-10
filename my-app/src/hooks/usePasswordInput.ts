import { useState } from "react";

import { validateNumeric } from "../utils/validators";

type UsePasswordInputParams = {
  onValueHandler: (value: string) => void;
};

export const usePasswordInput = ({ onValueHandler }: UsePasswordInputParams) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState("");

  const onChange = (value: string) => {
    setErrorMessage("");
    setInputValue(value);
    onValueHandler(value);
  };

  const handleBlur = () => {
    setErrorMessage(validateNumeric(inputValue));
  };

  return {
    inputValue,
    errorMessage,
    handlers: { onChange, handleBlur },
  };
};
