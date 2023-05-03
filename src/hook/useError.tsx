import { useState } from "react";

export const useError = () => {
  const [isError, setIsError] = useState(false);

  const setErrorState = (error: boolean) => {
    setIsError(error);
  };

  const removeError = () => {
    setIsError(false);
  };

  return { isError, setErrorState, removeError };
};
