import { useState } from 'react';
import { isInputNumbericString } from '@/core/utils/validator';
import { CVC_LENGTH, validateCvc } from '@/entities/card/cvc';

export interface UseCvcResult {
  value: string;
  errorMessage: string | undefined;
  maxLength: number;
  isValid: boolean;
  handleChange: (value: string) => void;
  handleBlur: () => void;
}

export const useCvc = ({ onComplete }: { onComplete: () => void }): UseCvcResult => {
  const [value, setValue] = useState('');
  const [touched, setTouched] = useState(false);

  const error = validateCvc(value);

  const handleChange = (inputValue: string): void => {
    if (!isInputNumbericString(inputValue)) return;
    setValue(inputValue);
    setTouched(false);
    if (!validateCvc(inputValue)) onComplete();
  };

  const handleBlur = () => setTouched(true);

  return {
    value,
    errorMessage: touched ? error : undefined,
    isValid: !error,
    maxLength: CVC_LENGTH,
    handleChange,
    handleBlur,
  };
};
