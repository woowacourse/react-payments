import { ChangeEvent, Dispatch, useState } from 'react';

export interface UseInputProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  name: string | undefined;
  error: string | undefined;
  setError: Dispatch<React.SetStateAction<string | undefined>>;
  isWrong: boolean;
  onBlur: () => void;
}

interface UseInputOptionProps {
  name?: string;
  validate?: (text: string) => boolean;
  errorMessage?: string;
  maxLength?: number;
  convertValue?: (text: string) => string;
}

export const useInput = (
  initialValue: string,
  {
    name,
    validate = () => true,
    errorMessage,
    maxLength,
    convertValue = (value: string) => value,
  }: UseInputOptionProps
): UseInputProps => {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState<string | undefined>('');

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;

    if (maxLength && maxLength < e.currentTarget.value.length) {
      return;
    }

    if (validate(value)) {
      const convertResult = convertValue(value);
      setValue(convertResult);
      setError('');
      return;
    }

    setError(errorMessage);
  };

  const onBlur = () => {
    setError('');
  };

  return {
    value,
    onChange,
    name,
    error,
    setError,
    isWrong: error !== '',
    onBlur,
  };
};
