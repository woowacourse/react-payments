import { useState } from 'react';
import { isNumeric } from '../components/validators/validator';

export const useInputValidator = (
  validator: typeof isNumeric,
  errorMessage: string,
  maxLength: number
) => {
  const [errorMessageState, setErrorMessageState] = useState('');

  const validate = (value: string) => {
    if (!validator(value) && value.length) {
      setErrorMessageState(errorMessage);
      return false;
    }

    if (errorMessageState) {
      setErrorMessageState('');
    }

    if (value.length > maxLength) {
      return false;
    }

    return true;
  };

  return { validate, errorMessageState };
};
