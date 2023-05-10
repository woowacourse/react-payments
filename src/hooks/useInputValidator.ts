import { useState } from 'react';
import { isNumeric } from '../components/validators/validator';

export const useInputValidator = (
  validator: typeof isNumeric,
  maxLength: number
) => {
  const [isError, setIsError] = useState(false);

  const validate = (value: string) => {
    if (!validator(value) && value.length) {
      setIsError(true);
      return false;
    }

    if (value.length > maxLength) {
      setIsError(true);
      return false;
    }

    setIsError(false);
    return true;
  };

  return { validate, isError };
};
