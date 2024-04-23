import { useState } from 'react';

interface UseInputParams<T> {
  values: T;
  errorMessages: { [K in keyof T]?: string };
}

const convertToUppercase = (value: string) => {
  return value.toUpperCase();
};

const useInput = <T extends object>(initialValue: UseInputParams<T>) => {
  const [valueInit, setValueInit] = useState(initialValue.values);
  const [error, setError] = useState(initialValue.errorMessages);

  const handleOnChange = (name: string, value: string) => {
    if (name === 'owner') {
      value = convertToUppercase(value);
    }
    setValueInit({ ...valueInit, [name]: value });
  };

  const handleError = (name: string, errorMessage: string) => {
    setError({ ...error, [name]: errorMessage });
  };

  return { valueInit, handleOnChange, error, handleError };
};

export default useInput;
