import { SyntheticEvent, useEffect, useState } from 'react';
import { ERROR_MESSAGES } from '../constants/errorMessages';

const useNumberInput = (maxLength: number) => {
  const [value, setValue] = useState<string>('');
  const [errorMessage, setErrorMessages] = useState<string>('');
  const [isValid, setIsValid] = useState(false);

  const handleValueChange = (e: SyntheticEvent<HTMLInputElement>) => {
    const { value } = e.target as HTMLInputElement;

    let errorMessage = '';

    if (e.type === 'change') {
      if (isNaN(Number(value))) {
        errorMessage = ERROR_MESSAGES.NOT_NUMBER;
      }
    } else if (e.type === 'blur' && value.length < maxLength) {
      errorMessage = ERROR_MESSAGES.MAX_LENGTH(maxLength);
    }

    if (errorMessage === '') setValue(value);
    setErrorMessages(errorMessage);
  };

  useEffect(() => {
    setIsValid(value.length >= maxLength);
  }, [value]);

  const reset = () => {
    setValue('');
  };

  return { value, setValue: handleValueChange, errorMessage, isValid, reset };
};

export default useNumberInput;
