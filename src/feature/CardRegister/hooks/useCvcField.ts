import { useState } from 'react';
import { isLengthBetween, isNumeric } from '../utils/validator';
import useTouchedFieldError from './useTouchedFieldError';
import {
  CVC_MAX_LENGTH,
  CVC_MIN_LENGTH,
  validateCvcNumber,
} from '../utils/cardFormValidator';

type UseCvcFieldParams = {
  onComplete?: () => void;
};

export type CvcFieldType = ReturnType<typeof useCvcField>;

export const useCvcField = ({ onComplete }: UseCvcFieldParams) => {
  const [cvcNumber, setCvcNumber] = useState('');

  const { firstErrorIndex, errorMessage, touch } = useTouchedFieldError({
    values: [cvcNumber],
    validate: validateCvcNumber,
  });

  const isComplete = validateCvcNumber(cvcNumber) === null;
  const hasError = firstErrorIndex === 0;

  const handleChange = (rawValue: string) => {
    const value = rawValue.trim();

    if (!isNumeric(value)) return;
    if (!isLengthBetween(value, CVC_MIN_LENGTH, CVC_MAX_LENGTH)) return;

    setCvcNumber(value);

    if (validateCvcNumber(value) === null) onComplete?.();
  };

  const handleBlur = () => {
    touch(0);
  };

  return {
    cvcNumber,
    errorMessage,
    hasError,
    isComplete,
    handleChange,
    handleBlur,
  };
};
