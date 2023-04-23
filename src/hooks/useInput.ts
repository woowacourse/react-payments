import { ChangeEvent, useState } from 'react';

export interface UseInputProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  name: string | undefined;
  error: string | undefined;
}

interface UseInputOptionProps {
  name?: string;
  validate?: (text: string) => boolean;
  errorMessage?: string;
  maxLength?: number;
}

export const useInput = (
  initialValue: string,
  { name, validate = () => true, errorMessage, maxLength }: UseInputOptionProps
): UseInputProps => {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState<string | undefined>('');

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;

    if (maxLength && maxLength < e.currentTarget.value.length) {
      return;
    }

    if (validate(value)) {
      setValue(value);
      setError('');
      return;
    }

    setError(errorMessage);
  };

  return { value, onChange, name, error };
};
