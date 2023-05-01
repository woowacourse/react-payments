import { useState } from "react";

const useError = () => {
  const [isError, setIsError] = useState(false);

  const handleError = (isValid: boolean) => {
    setIsError(!isValid);
  };

  const removeError = () => {
    if (isError) setIsError(false);
  };

  return { isError, handleError, removeError };
};

export { useError };
