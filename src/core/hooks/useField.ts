import { useState } from 'react';

interface UseFieldProps {
  validateFormat: (value: string) => string | undefined;
  validateComplete: (value: string) => string | undefined;
}

interface UseFieldResult {
  value: string;
  error: string | undefined;
  handleChange: (value: string) => void;
  handleBlur: () => void;
}

export const useField = ({ validateFormat, validateComplete }: UseFieldProps): UseFieldResult => {
  const [value, setValue] = useState('');
  const [error, setError] = useState<string | undefined>();

  const handleChange = (nextValue: string) => {
    const errorMessage = validateFormat(nextValue);
    setError(errorMessage);
    if (errorMessage) return;
    setValue(nextValue);
  };

  const handleBlur = () => {
    setError(validateComplete(value));
  };

  return { value, error, handleChange, handleBlur };
};
