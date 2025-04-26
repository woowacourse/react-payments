import { useState } from 'react';
import { validateMonth, validateYear } from '../domain/validate';
import { CARD_VALIDATION_INFO } from '../constants/cardValidationInfo';

export const useCardExpiryValidation = (): [
  boolean[],
  string,
  (name: string, value: string) => void
] => {
  const [isErrors, setIsErrors] = useState([false, false]);
  const [errorMessage, setErrorMessage] = useState('');

  const validate = (name: string, value: string) => {
    try {
      if (name === 'month') {
        if (value.length === 0) {
          setIsErrors([false, isErrors[1]]);
          setErrorMessage('');
          return;
        }
        validateMonth(value, CARD_VALIDATION_INFO.EXPIRE_DATE_MAX_LENGTH);
        setIsErrors([false, isErrors[1]]);
        setErrorMessage('');
      } else if (name === 'year') {
        if (value.length === 0) {
          setIsErrors([isErrors[0], false]);
          setErrorMessage('');
          return;
        }
        validateYear(value, CARD_VALIDATION_INFO.EXPIRE_DATE_MAX_LENGTH);
        setIsErrors([isErrors[0], false]);
        setErrorMessage('');
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        if (name === 'month') {
          setIsErrors([true, isErrors[1]]);
        } else if (name === 'year') {
          setIsErrors([isErrors[0], true]);
        }
        setErrorMessage(error.message);
      }
    }
  };

  return [isErrors, errorMessage, validate];
};
