import { useEffect, useState } from 'react';

interface useValidationProps {
  value: string;
  message: string;
  validateFunction: (value: string) => boolean;
}

const useValidation = ({ value, message, validateFunction }: useValidationProps) => {
  const [isValid, setIsValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    value && validate();
  }, [value]);

  const validate = () => {
    const newIsValid = validateFunction(value);

    setIsValid(newIsValid);
    setErrorMessage(newIsValid ? '' : message);
  };

  return { isValid, errorMessage };
};

export default useValidation;
