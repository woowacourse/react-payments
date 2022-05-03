import { useState } from 'react';

function useErrorMessage({ state, validate }) {
  const [errorMessage, setErrorMessage] = useState(null);

  const handleError = (isSkipValidation) => {
    if (isSkipValidation) return;

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
