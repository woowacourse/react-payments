import { useState } from 'react';

interface useErrorProps<T> {
  validator: (...args: any[]) => boolean;
  changeInputValidation: (key: keyof T, value: boolean) => void;
  inputs?: string[];
}

const useError = <T extends Record<string, boolean>>({
  validator,
  changeInputValidation,
  inputs,
}: useErrorProps<T>) => {
  const [isError, setIsError] = useState(false);

  const handleError = (inputName: string, value?: string) => {
    const isValid = inputs ? validator(inputs) : validator(value);

    if (isValid) {
      setIsError(false);
      changeInputValidation(inputName, true);
    }

    if (!isValid) {
      setIsError(true);
      changeInputValidation(inputName, false);
    }
  };

  return [isError, handleError] as const;
};

export { useError };
