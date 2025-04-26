import { useState } from 'react';
import { validateCardPassword } from '../domain/validate';
import { CARD_VALIDATION_INFO } from '../constants/cardValidationInfo';

export const useCardPasswordValidation = (): [
  boolean,
  string,
  (value: string) => void
] => {
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const validate = (value: string) => {
    try {
      setIsError(false);
      if (value.length === 0) {
        setErrorMessage('');
        return;
      }
      validateCardPassword(value, CARD_VALIDATION_INFO.PASSWORD_MAX_LENGTH);
      setErrorMessage('');
    } catch (error) {
      if (error instanceof Error) {
        setIsError(true);
        setErrorMessage(error.message);
      }
    }
  };

  return [isError, errorMessage, validate];
};
