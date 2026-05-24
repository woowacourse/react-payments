import { useState } from 'react';

interface ValidationResult {
  error: boolean;
  message: string;
}

interface Props {
  value: string;
  updateValue: (value: string) => void;
  validate: (value: string) => ValidationResult;
  invalidMessage: string;
  serverErrorMessage?: string;
}

function useValidatedNumberInput({
  value,
  updateValue,
  validate,
  invalidMessage,
  serverErrorMessage,
}: Props) {
  const [validation, setValidation] = useState<ValidationResult>({
    error: false,
    message: '',
  });

  function handleOnChange(inputValue: string) {
    if (!/^[0-9]*$/.test(inputValue)) {
      setValidation({
        error: true,
        message: invalidMessage,
      });
      return;
    }

    updateValue(inputValue);
    setValidation({
      error: false,
      message: '',
    });
  }

  function handleOnBlur() {
    setValidation(validate(value));
  }

  return {
    error: validation.error || !!serverErrorMessage,
    errorMessage: validation.message || serverErrorMessage || '',
    handleOnChange,
    handleOnBlur,
  };
}

export default useValidatedNumberInput;
