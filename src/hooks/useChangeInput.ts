import { useState } from 'react';

interface ValidationResult {
  isValid: boolean;
  isCompleted: boolean;
  errorMessage: string;
}

export default function useChangeInput(
  initialValue: string,
  validateFunction: (value: string) => ValidationResult,
  onSubmit?: () => void,
) {
  const [value, setValue] = useState(initialValue);
  const [validationResult, setValidationResult] = useState<ValidationResult>({
    isValid: true,
    isCompleted: false,
    errorMessage: '',
  });

  const handleChange = (newValue: string) => {
    const result = validateFunction(newValue);
    setValidationResult(result);
    setValue(newValue);
  };

  const handleSubmit = () => {
    if (onSubmit) {
      onSubmit();
    }
    setValidationResult((prevState) => ({
      ...prevState,
      isCompleted: true,
    }));
  };

  return { value, validationResult, handleChange, handleSubmit };
}
