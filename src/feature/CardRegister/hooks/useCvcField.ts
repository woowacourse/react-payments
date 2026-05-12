import { useState } from 'react';
import useFieldValidation from '../../../common/hooks/useFieldValidation';
import { CVC_LENGTH, validateCvcNumber } from '../utils/cardFormValidator';
import { isNumeric, isWithinMaxLength } from '../utils/validator';

type UseCvcFieldParams = {
  onComplete?: () => void;
};

export type CvcFieldType = ReturnType<typeof useCvcField>;

export const useCvcField = ({ onComplete }: UseCvcFieldParams) => {
  const [cvcNumber, setCvcNumber] = useState('');

  const { firstErrorIndex, errorMessage, touch } = useFieldValidation({
    values: [cvcNumber],
    validate: validateCvcNumber,
  });

  const isComplete = validateCvcNumber(cvcNumber) === null;
  const hasError = firstErrorIndex === 0;

  const handleChange = (rawValue: string) => {
    const value = rawValue.trim();

    if (!isNumeric(value)) return;
    if (!isWithinMaxLength(value, CVC_LENGTH)) return;

    setCvcNumber(value);

    if (validateCvcNumber(value) === null) onComplete();
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
