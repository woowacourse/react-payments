import { useState } from 'react';

const useError = (isValid: boolean) => {
  const [isError, setIsError] = useState(false);

  const handleError = () => {
    setIsError(!isValid);
  };

  const removeError = () => {
    if (isError) setIsError(false);
  };

  return { isError, handleError, removeError };
};

export { useError };
