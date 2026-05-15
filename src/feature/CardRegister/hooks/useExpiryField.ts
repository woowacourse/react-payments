import { useState } from 'react';
import {
  EXPIRY_LENGTH,
  validateExpiryMonth,
  validateExpiryYear,
} from '../utils/cardFormValidator';
import {
  isExactLength,
  isNumeric,
  isValidMonth,
  isWithinMaxLength,
} from '../utils/validator';
import useTouchedFieldError from './useTouchedFieldError';
import { useInputRefs } from './useInputRefs';

type UseExpiryFieldParams = {
  onComplete?: () => void;
};

export type ExpiryFieldType = ReturnType<typeof useExpiryField>;

export const useExpiryField = ({ onComplete }: UseExpiryFieldParams) => {
  const [expiryMonth, setExpiryMonth] = useState('');
  const [expiryYear, setExpiryYear] = useState('');

  const { firstErrorIndex, errorMessage, touch } = useTouchedFieldError({
    values: [expiryMonth, expiryYear],
    validate: (value, index) => {
      if (index === 0) {
        return validateExpiryMonth(value);
      }

      return validateExpiryYear(value);
    },
  });

  const isComplete =
    validateExpiryMonth(expiryMonth) === null &&
    validateExpiryYear(expiryYear) === null;

  const checkComplete = (expiryMonth: string, expiryYear: string) => {
    if (
      validateExpiryMonth(expiryMonth) === null &&
      validateExpiryYear(expiryYear) === null
    ) {
      onComplete?.();
    }
  };

  const { setInputRef, focusNextInput, handleKeyDown } = useInputRefs([
    expiryMonth,
    expiryYear,
  ]);

  const [monthErrorMessage, setMonthErrorMessage] = useState('');

  const handleMonthChange = (eValue: string) => {
    const value = eValue.trim();

    if (!isNumeric(value)) return;
    if (!isWithinMaxLength(value, EXPIRY_LENGTH)) return;
    if (isExactLength(value, EXPIRY_LENGTH) && !isValidMonth(value)) {
      setMonthErrorMessage('월은 01부터 12까지 입력해 주세요');
      touch(0);
      return;
    }

    setMonthErrorMessage('');
    setExpiryMonth(value);

    if (value.length === EXPIRY_LENGTH) focusNextInput(0);

    checkComplete(value, expiryYear);
  };

  const handleYearChange = (eValue: string) => {
    const value = eValue.trim();

    if (!isNumeric(value)) return;
    if (!isWithinMaxLength(value, EXPIRY_LENGTH)) return;

    setExpiryYear(value);

    checkComplete(expiryMonth, value);
  };

  const fillZero = (value: string, expiryType: 'month' | 'year'): string => {
    if (expiryType === 'month' && value.length === 1 && value !== '0') {
      return `0${value}`;
    }
    if (expiryType === 'year' && value.length === 1) {
      return `0${value}`;
    }

    return value;
  };

  const handleExpiryBlur = (
    index: number,
    eValue: string,
    expiryType: 'month' | 'year',
  ) => {
    if (expiryType === 'month') {
      const filledValue = fillZero(eValue, expiryType);
      setExpiryMonth(filledValue);

      if (validateExpiryMonth(filledValue) === null) setMonthErrorMessage('');
    }

    touch(index);
  };

  return {
    expiryMonth,
    expiryYear,
    firstErrorIndex,
    errorMessage: monthErrorMessage || errorMessage,
    isComplete,
    setInputRef,
    handleMonthChange,
    handleYearChange,
    handleExpiryBlur,
    handleKeyDown,
  };
};
