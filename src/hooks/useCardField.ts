import { useState } from 'react';
import { isOnlyDigits } from '../utils/validateNumber';

export interface ValidationConfig {
  minValue?: number;
  maxValue?: number;
  requiredLength?: number;
  errorMessages: {
    onlyNumbers: string;
    invalidValue?: string;
  };
}

export const useCardField = (validationConfig: ValidationConfig) => {
  const [value, setValue] = useState<string>('');
  const [error, setError] = useState<boolean>(false);

  const handleChange = (inputValue: string) => {
    const isNumber = isOnlyDigits(inputValue);

    if (isNumber) {
      if (inputValue.length > 0) {
        const numValue = Number(inputValue);

        if (
          (validationConfig.minValue !== undefined &&
            numValue < validationConfig.minValue) ||
          (validationConfig.maxValue !== undefined &&
            numValue > validationConfig.maxValue)
        ) {
          setError(true);
          setValue(inputValue);
          return;
        }
      }

      setValue(inputValue);
      setError(false);
    } else {
      setError(true);
    }
  };

  const reset = () => {
    setValue('');
    setError(false);
  };

  const isValid = () => {
    const numValue = Number(value);

    const isLengthValid =
      validationConfig.requiredLength === undefined ||
      value.length === validationConfig.requiredLength;

    const isMinValid =
      validationConfig.minValue === undefined ||
      numValue >= validationConfig.minValue;

    const isMaxValid =
      validationConfig.maxValue === undefined ||
      numValue <= validationConfig.maxValue;

    return isLengthValid && isMinValid && isMaxValid && !error;
  };

  const getErrorMessage = (): string | null => {
    if (!error) return null;

    const numValue = Number(value);

    if (!value || isNaN(numValue)) {
      return validationConfig.errorMessages.onlyNumbers;
    }

    if (
      validationConfig.errorMessages.invalidValue &&
      ((validationConfig.minValue !== undefined &&
        numValue < validationConfig.minValue) ||
        (validationConfig.maxValue !== undefined &&
          numValue > validationConfig.maxValue))
    ) {
      return validationConfig.errorMessages.invalidValue;
    }

    return null;
  };

  return {
    value,
    error,
    handleChange,
    reset,
    isValid,
    getErrorMessage,
  };
};
