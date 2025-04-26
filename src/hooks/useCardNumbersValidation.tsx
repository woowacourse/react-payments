import { useState } from 'react';
import {
  validateCardNumbers,
  validateFirstCardNumbers,
} from '../domain/validate';
import { CARD_VALIDATION_INFO } from '../constants/cardValidationInfo';
import CustomCardNumbersError from '../error/CustomCardNumbersError';

export const useCardNumbersValidation = (): [
  boolean[],
  string,
  (value: string[], index: number) => void
] => {
  const [isErrors, setIsErrors] = useState([false, false, false, false]);
  const [errorMessage, setErrorMessage] = useState('');

  const validate = (value: string[], index: number) => {
    try {
      if (value[index].length === 0) {
        setIsErrors((prevErrors) => {
          const newErrors = [...prevErrors];
          newErrors[index] = false;
          return newErrors;
        });
        setErrorMessage('');
        return;
      }
      validateFirstCardNumbers(value[0]);
      validateCardNumbers(value, CARD_VALIDATION_INFO.CARD_MAX_LENGTH);
      setErrorMessage('');
      setIsErrors([false, false, false, false]);
    } catch (error: unknown) {
      if (error instanceof CustomCardNumbersError) {
        setIsErrors((prevErrors) => {
          const newErrors = [...prevErrors];
          newErrors[error.index] = true;
          return newErrors;
        });
        setErrorMessage(error.message);
      }
    }
  };

  return [isErrors, errorMessage, validate];
};
