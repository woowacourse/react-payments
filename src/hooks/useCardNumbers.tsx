import React, { useRef } from 'react';
import { useState } from 'react';
import { CARD_VALIDATION_INFO } from '../constants/cardValidationInfo';
import {
  validateCardNumbers,
  validateFirstCardNumbers,
} from '../domain/validate';
import CustomCardNumbersError from '../error/CustomCardNumbersError';

export const useCardNumbers = (): {
  cardNumbers: string[];
  setCardNumbers: React.Dispatch<React.SetStateAction<string[]>>;
  updateCardNumber: (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => void;
  cardNumbersRef: React.RefObject<HTMLInputElement[]>;
  isErrors: boolean[];
  errorMessage: string;
} => {
  const [cardNumbers, setCardNumbers] = useState(['', '', '', '']);
  const [isErrors, setIsErrors] = useState([false, false, false, false]);
  const [errorMessage, setErrorMessage] = useState('');
  const cardNumbersRef = useRef<HTMLInputElement[]>([]);

  const updateCardNumber = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const newCardNumbers = [...cardNumbers];
    newCardNumbers[index] = e.target.value;
    setCardNumbers(newCardNumbers);

    validate(newCardNumbers, index);

    // const isValid = newCardNumbers.every(
    //   (number) => number.length === CARD_VALIDATION_INFO.CARD_MAX_LENGTH
    // );
    // updateInputState('cardNumbers', { isComplete: isValid });
    // if (isValid) updateInputState('brand', { isVisible: true });

    if (e.target.value.length === CARD_VALIDATION_INFO.CARD_MAX_LENGTH) {
      cardNumbersRef.current[index + 1]?.focus();
    }
  };

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

  return {
    cardNumbers,
    setCardNumbers,
    updateCardNumber,
    cardNumbersRef,
    isErrors,
    errorMessage,
  };
};
