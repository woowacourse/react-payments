import { useState } from 'react';
import useErrorArrayState from './useErrorStateUpdate';
import { HandleInputParams } from '../types/input';
import { inputValidation } from '../validators/inputValidator';

type ExpDateValidationFn = (
  values: string[],
  params: HandleInputParams,
  validLength: number
) => void;

function useValidation(
  initialErrorState: boolean[],
  validLength: number,
  options?: {
    values: string[];
    expDateValidationFn: ExpDateValidationFn;
  }
) {
  const { errorState, updateErrorState } = useErrorArrayState(initialErrorState.length, () =>
    setErrorMessage('')
  );

  const [errorMessage, setErrorMessage] = useState('');
  const error = { state: errorState, message: errorMessage };

  const validate = (params: HandleInputParams) => {
    try {
      if (options) {
        options.expDateValidationFn(options.values, params, validLength);
      } else {
        inputValidation(params.e, validLength);
      }
      updateErrorState(params.idx, false);
    } catch (error) {
      updateErrorState(params.idx, true);
      if (error instanceof Error) {
        setErrorMessage(error.message);
      }
    }
  };

  return {
    error,
    validate,
  };
}

export default useValidation;
