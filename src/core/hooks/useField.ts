import { useState } from 'react';

interface UseFieldProps {
  state: string;
  validateFormat: (value: string) => string | undefined;
  validateComplete: (value: string) => string | undefined;
  onChange: (value: string) => void;
}

type Error = string | undefined;

interface UseFieldResult {
  error: Error;
  handleChange: (value: string) => void;
  handleBlur: () => void;
}

export const useField = ({
  state,
  validateFormat,
  validateComplete,
  onChange,
}: UseFieldProps): UseFieldResult => {
  const [error, setError] = useState<Error>();

  const handleChange = (value: string) => {
    const errorMessage = validateFormat(value);
    setError(errorMessage);
    if (errorMessage) return;
    onChange(value);
  };

  const handleBlur = () => {
    setError(validateComplete(state));
  };

  return { error, handleChange, handleBlur };
};
