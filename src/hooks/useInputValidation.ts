import { useState } from 'react';
import useErrorArrayState from './useErrorStateUpdate';
import { HandleInputParams } from '../types/input';
import { inputValidation } from '../validators/inputValidator';

function useInputValidation(initialErrorState: boolean[], validLength: number) {
  const { errorState, updateErrorState } = useErrorArrayState(initialErrorState.length, () =>
    setErrorMessage('')
  );

  const [errorMessage, setErrorMessage] = useState('');
  const error = { state: errorState, message: errorMessage };

  const validate = ({ e, idx }: HandleInputParams) => {
    try {
      inputValidation(e, validLength);
      updateErrorState(idx, false);
    } catch (error) {
      updateErrorState(idx, true);
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

export default useInputValidation;
