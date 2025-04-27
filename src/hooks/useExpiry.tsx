import React from 'react';
import { useState, useRef } from 'react';
import { validateMonth, validateYear } from '../domain/validate';
import { CARD_VALIDATION_INFO } from '../constants/cardValidationInfo';

export const useExpiry = (): {
  month: string;
  setMonth: React.Dispatch<React.SetStateAction<string>>;
  year: string;
  setYear: React.Dispatch<React.SetStateAction<string>>;
  updateDate: (e: React.ChangeEvent<HTMLInputElement>) => void;
  expiryRef: React.RefObject<HTMLInputElement[]>;
  isErrors: boolean[];
  errorMessage: string;
} => {
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [isErrors, setIsErrors] = useState([false, false]);
  const [errorMessage, setErrorMessage] = useState('');
  const expiryRef = useRef<HTMLInputElement[]>([]);

  const updateDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'month') {
      setMonth(value);
    } else if (name === 'year') {
      setYear(value);
    }
    validate(name, value);
    // const isMonthValid =
    //   (name === 'month' ? value : month).length ===
    //   CARD_VALIDATION_INFO.EXPIRE_DATE_MAX_LENGTH;
    // const isYearValid =
    //   (name === 'year' ? value : year).length ===
    //   CARD_VALIDATION_INFO.EXPIRE_DATE_MAX_LENGTH;

    // const isExpiryComplete = isMonthValid && isYearValid;

    // updateInputState('expiry', { isComplete: isExpiryComplete });
    // if (isExpiryComplete) {
    //   updateInputState('CVC', { isVisible: true });
    // }
    if (e.target.value.length === CARD_VALIDATION_INFO.EXPIRE_DATE_MAX_LENGTH) {
      expiryRef.current[1]?.focus();
    }
  };

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

  return {
    month,
    setMonth,
    year,
    setYear,
    updateDate,
    expiryRef,
    isErrors,
    errorMessage,
  };
};
