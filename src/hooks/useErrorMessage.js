import { useState } from 'react';

function useErrorMessage({ state, validate, isCondition = false }) {
  const [errorMessage, setErrorMessage] = useState(null);

  const handleError = () => {
    if (isCondition) return;

    try {
      validate(state);
      setErrorMessage(null);
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return { errorMessage, handleError };
}

export default useErrorMessage;
