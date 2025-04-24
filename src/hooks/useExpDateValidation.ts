import { useState } from 'react';
import { HandleInputParams } from '../pages/CardPage/CardPage';
import useErrorArrayState from './useErrorStateUpdate';

function useExpDateValidation(
  initialErrorState: boolean[],
  values: string[],
  validationFn: (values: string[], params: HandleInputParams, validLength: number) => void
) {
  const { isError, updateErrorState } = useErrorArrayState(initialErrorState.length, () =>
    setErrorMessage('')
  );

  const [errorMessage, setErrorMessage] = useState('');

  const validateExpirationDate = (params: HandleInputParams) => {
    try {
      validationFn(values, params, 2);
      updateErrorState(params.idx, false);
    } catch (error) {
      updateErrorState(params.idx, true);
      if (error instanceof Error) {
        setErrorMessage(error.message);
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
