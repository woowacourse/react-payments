import { useState } from 'react';
import { PASSWORD_LENGTH, validatePassword } from '../utils/cardFormValidator';
import { isNumeric, isWithinMaxLength } from '../utils/validator';
import useTouchedFieldError from './useTouchedFieldError';

type UsePasswordFieldParams = {
  onComplete?: () => void;
};

export type PasswordFieldType = ReturnType<typeof usePasswordField>;

export const usePasswordField = ({ onComplete }: UsePasswordFieldParams) => {
  const [password, setPassword] = useState('');

  const { firstErrorIndex, errorMessage, touch } = useTouchedFieldError({
    values: [password],
    validate: validatePassword,
  });

  const isComplete = validatePassword(password) === null;
  const hasError = firstErrorIndex === 0;

  const handleChange = (rawValue: string) => {
    const value = rawValue.trim();

    if (!isNumeric(value)) return;
    if (!isWithinMaxLength(value, PASSWORD_LENGTH)) return;

    setPassword(value);

    if (validatePassword(value) === null) onComplete?.();
  };

  const handleBlur = () => {
    touch(0);
  };

  return {
    password,
    errorMessage,
    hasError,
    isComplete,
    handleChange,
    handleBlur,
  };
};
