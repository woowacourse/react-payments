import { useState } from 'react';
import useErrorArrayState from './useErrorStateUpdate';
import { HandleInputParams } from '../types/input';

function useExpDateValidation(
  initialErrorState: boolean[],
  values: string[],
  validationFn: (values: string[], params: HandleInputParams, validLength: number) => void
) {
  const { errorState, updateErrorState } = useErrorArrayState(initialErrorState.length, () =>
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
    errorState,
    errorMessage,
    validateExpirationDate,
  };
}

export default useExpDateValidation;
