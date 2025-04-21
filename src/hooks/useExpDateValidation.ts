import { useState } from 'react';
import { HandleInputParams } from '../components/CardPage/CardPage';
import { ERROR_MESSAGES } from '../validators/errorMessages';

function useExpDateValidation(
  initialErrorState: boolean[],
  values: string[],
  validationFn: (values: string[], params: HandleInputParams, validLength: number) => void
) {
  const [isError, setIsError] = useState(initialErrorState);
  const [errorMessage, setErrorMessage] = useState('');

  const validateExpirationDate = (params: HandleInputParams) => {
    const newErrorState = [...isError];
    newErrorState[params.idx] = false;

    try {
      validationFn(values, params, 2);

      if (newErrorState.every((state) => !state)) {
        setErrorMessage('');
      }
      setIsError(newErrorState);
    } catch (error) {
      if (error instanceof Error) {
        if (error.message === ERROR_MESSAGES.INVALID_EXPIRATION) {
          newErrorState[0] = true;
          setIsError(newErrorState);
          setErrorMessage(error.message);
        } else {
          newErrorState[params.idx] = true;
          setIsError(newErrorState);
          setErrorMessage(error.message);
        }
      }
    }
  };

  return {
    isError,
    errorMessage,
    validateExpirationDate,
  };
}

export default useExpDateValidation;
