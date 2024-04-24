import { useState } from 'react';

interface useValidatedInputProps {
  defaultValue: string;
  validateFunction: (value: string) => boolean;
}

const useValidatedInput = ({ defaultValue, validateFunction }: useValidatedInputProps) => {
  const [value, setValue] = useState(defaultValue);
  const [isValid, setIsValid] = useState(true);

  const handleValue = (newValue: string) => {
    const newIsValid = validateFunction(newValue);

    setIsValid(newIsValid);
    setValue(newIsValid ? newValue : '');
  };

  return { value, isValid, handleValue };
};

export default useValidatedInput;
