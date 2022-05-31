import { useState } from 'react';
import { ErrorChecker } from '@/types';

function useErrorMessage({ state, validate, isAnyValueEmpty = false }: ErrorChecker) {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleError = () => {
    if (isAnyValueEmpty) return;

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
