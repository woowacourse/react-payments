import { useState } from 'react';
import { validateCVC } from '../domain/validate';
import { CARD_VALIDATION_INFO } from '../constants/cardValidationInfo';

export const useCVCValidation = (): [
  boolean,
  string,
  (value: string) => void
] => {
  const [isErrors, setIsErrors] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const validate = (value: string) => {
    try {
      setIsErrors(false);
      if (value.length === 0) {
        setErrorMessage('');
        return;
      }
      validateCVC(value, CARD_VALIDATION_INFO.CVC_MAX_LENGTH);
      setErrorMessage('');
    } catch (error: unknown) {
      if (error instanceof Error) {
        setIsErrors(true);
        setErrorMessage(error.message);
      }
    }
  };

  return [isErrors, errorMessage, validate];
};
