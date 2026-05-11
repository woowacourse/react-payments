import { useCallback, useState } from "react";

type UseSingleFieldInputParams = {
  onValueHandler: (value: string) => void;
  validate: (value: string) => string;
};

export const useSingleFieldInput = ({ onValueHandler, validate }: UseSingleFieldInputParams) => {
  const [inputValue, setInputValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const onChange = useCallback(
    (value: string) => {
      setErrorMessage("");
      setInputValue(value);
      onValueHandler(value);
    },
    [onValueHandler],
  );

  const handleBlur = useCallback(() => {
    setErrorMessage(validate(inputValue));
  }, [validate, inputValue]);

  return {
    inputValue,
    errorMessage,
    handlers: { onChange, handleBlur },
  };
};
