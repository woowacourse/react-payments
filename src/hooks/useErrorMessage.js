import { useState } from 'react';

function useErrorMessage({ state, validate, isValid = false }) {
  const [errorMessage, setErrorMessage] = useState(null);

  const handleError = () => {
    if (isValid) return;

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
