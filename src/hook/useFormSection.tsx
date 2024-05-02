import { useState } from 'react';

export interface UseFormSectionProps {
  updateValue: (value: string) => void;
  validateOnChange: (value: string) => ValidateResult;
  validateOnBlur: () => ValidateResult;
}

export interface ValidateResult {
  isValid: boolean;
  errorMessage: string;
}

const useFormSection = ({
  updateValue,
  validateOnChange,
  validateOnBlur,
}: UseFormSectionProps) => {
  const [errorMessage, setErrorMessage] = useState('');

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    const { isValid, errorMessage } = validateOnChange(newValue);

    if (!isValid) {
      setErrorMessage(errorMessage);

      return;
    }
    setErrorMessage('');
    updateValue(newValue);
  };

  const onFocusHandler = () => {
    setErrorMessage('');
  };

  const onBlurHandler = () => {
    const { isValid, errorMessage } = validateOnBlur();

    if (!isValid) {
      setErrorMessage(errorMessage);
    }
  };

  return {
    errorMessage,
    onChangeHandler,
    onFocusHandler,
    onBlurHandler,
  };
};
export default useFormSection;
