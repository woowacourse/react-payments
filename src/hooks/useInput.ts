import { ChangeEvent, Dispatch, useEffect, useState } from 'react';

export interface UseInputProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  name: string;
  error: string | undefined;
  setError: Dispatch<React.SetStateAction<string | undefined>>;
  isWrong: boolean;
  onBlur: () => void;
  maxLength: number;
  required: boolean;
  validate: (text: string) => boolean;
}

interface UseInputOptionProps {
  name: string;
  validate: (text: string) => boolean;
  errorMessage?: string;
  maxLength: number;
  isRequired: boolean;
  isNumber?: boolean;
  convertValue?: (text: string) => string;
}

export const useInput = (
  initialValue: string,
  {
    name,
    validate = () => true,
    errorMessage,
    maxLength,
    isRequired,
    isNumber = false,
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

    if (isNumber) {
      const convertResult = convertValue(value);
      setValue(convertResult);
      setError('');
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

  useEffect(() => {
    if (isNumber && maxLength === value.length) {
      const isSuccess = validate(value);

      if (isSuccess) {
        setError('');
      } else {
        setError(errorMessage);
      }
    }
  }, [isNumber, setError, maxLength, errorMessage, validate, value]);

  const onBlur = () => {};

  return {
    value,
    onChange,
    name,
    error,
    setError,
    isWrong: error !== '',
    onBlur,
    required: isRequired,
    validate,
    maxLength,
  };
};
