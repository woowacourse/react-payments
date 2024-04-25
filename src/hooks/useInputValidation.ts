import { useState } from "react";

interface UseInputValidationProps {
  value: string;
  onChange: (value: string) => void;
  onValidate?: (isValid: boolean) => void;
  validator?: (value: string) => boolean;
}

const useInputValidation = ({
  value,
  onChange,
  onValidate,
  validator,
}: UseInputValidationProps) => {
  const [isValid, setIsValid] = useState(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    onChange(newValue);

    if (validator && onValidate) {
      const isValid = validator(newValue);
      setIsValid(isValid);
      onValidate(isValid);
    }
  };

  return {
    isValid,
    handleChange,
  };
};

export default useInputValidation;
