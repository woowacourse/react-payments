import { useState } from 'react';
import useFieldValidation from '../../../common/hooks/useFieldValidation';
import { CVC_LENGTH, validateCvcNumber } from '../utils/cardFormValidator';
import { isNumeric, isWithinMaxLength } from '../utils/validator';

type UseCvcFieldParams = {
  onComplete?: () => void;
};

export const useCvcField = ({ onComplete }: UseCvcFieldParams) => {
  const [value, setValue] = useState('');

  const { firstErrorIndex, errorMessage, touch } = useFieldValidation({
    values: [value],
    validate: validateCvcNumber,
  });

  const isComplete = validateCvcNumber(value) === null;
  const hasError = firstErrorIndex === 0;

  const handleChange = (rawValue: string) => {
    const nextValue = rawValue.trim();

    if (!isNumeric(nextValue)) return;
    if (!isWithinMaxLength(nextValue, CVC_LENGTH)) return;

    setValue(nextValue);

    if (validateCvcNumber(nextValue) === null) onComplete();
  };

  const handleBlur = () => {
    touch(0);
  };

  return {
    value,
    errorMessage,
    hasError,
    isComplete,
    handleChange,
    handleBlur,
  };
};
