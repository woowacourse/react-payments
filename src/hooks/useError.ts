import { useState } from "react";

const useError = <T>(initiallError: T) => {
  const [isError, setIsError] = useState<T>(initiallError);
  const [errorMessage, setErrorMessage] = useState("");

  const clearError = (target: string) => {
    setIsError((prev) => ({ ...prev, [target]: false }));
    setErrorMessage("");
  };

  const setErrorField = (target: string, message: string) => {
    setIsError((prev) => ({ ...prev, [target]: true }));
    setErrorMessage(message);
  };

  const error = {
    isError,
    errorMessage,
  };

  return { error, setErrorField, clearError };
};

export default useError;
