import { useState } from 'react';
import useShow from './useShow';
import { AllKeysType, Validation } from '../types/cardType';

interface UseInputsParams<T> {
  values: T;
  errorMessages: { [K in keyof T]?: string };
}

const useInputs = <T extends object>(initialValue: UseInputsParams<T>) => {
  const [valueInit, setValueInit] = useState(initialValue.values);
  const [error, setError] = useState(initialValue.errorMessages);

  const handleOnChange = (validation: Validation) => {
    return (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      const name = event.target.name as AllKeysType;
      try {
        validation(value);
        handleValue(name, value);
        handleError(name);
      } catch (error) {
        if (error instanceof Error) {
          handleValue(name, value);
          handleError(name, error.message);
        }
      }
    };
  };

  const handleValue = (name: string, value: string) => {
    setValueInit({ ...valueInit, [name]: value });
  };

  const handleError = (name: string, errorMessage = '') => {
    setError({ ...error, [name]: errorMessage });
  };

  const { pass } = useShow({ valueInit, error, showInit: false });

  return { pass, valueInit, handleOnChange, error };
};

export default useInputs;
