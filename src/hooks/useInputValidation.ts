import { useState } from 'react';
import { HandleInputParams } from '../pages/CardPage/CardPage';
function useInputValidation(initialErrorState: boolean[], validationFn: (value: string) => void) {
  const [isError, setIsError] = useState(initialErrorState);
  const [errorMessage, setErrorMessage] = useState('');

  const updateError = (idx: number, hasError: boolean, message?: string) => {
    setIsError((prev) => {
      const updated = [...prev];
      updated[idx] = hasError;

      if (!hasError && updated.every((error) => error === false)) {
        setErrorMessage('');
      } else if (hasError && message) {
        setErrorMessage(message);
      }

      return updated;
    });
  };

  const validate = ({ value, idx }: HandleInputParams) => {
    try {
      validationFn(value);
      updateError(idx, false);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Invalid input';
      updateError(idx, true, errorMessage);
    }
  };

  return {
    isError,
    errorMessage,
    validate,
  };
}

export default useInputValidation;
