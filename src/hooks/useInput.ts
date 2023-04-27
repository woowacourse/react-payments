import { useState } from "react";

const useInput = (validator?: (inputValue: string) => void) => {
  const [inputValue, setInputValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;

    try {
      validator && validator(inputValue);
      setInputValue(inputValue);
      setErrorMessage("");
    } catch (error) {
      if (!(error instanceof Error)) return;
      setErrorMessage(error.message);
    }
  };

  return { inputValue, errorMessage, onChange };
};

export default useInput;
