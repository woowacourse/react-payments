import { useState } from "react";

const useInput = (initialValue: string) => {
  const [value, setValue] = useState<string>(initialValue);
  const [errorMessage, setErrorMessage] = useState("");
  const [isValid, setIsValid] = useState(true);

  const setError = (errorMessage: string) => {
    setErrorMessage(errorMessage);
    setIsValid(false);
  };
  const resetError = () => {
    setErrorMessage("");
    setIsValid(true);
  };
  return { value, errorMessage, isValid, setValue, setError, resetError };
};

export default useInput;
