import { SyntheticEvent, useEffect, useState } from 'react';
import { ERROR_MESSAGES } from '../constants/errorMessages';

const useNumberInput = (maxLength: number) => {
  const [value, setValue] = useState<string>('');
  const [errorMessage, setErrorMessages] = useState<string>('');
  const [isValid, setIsValid] = useState(false);

  // TODO: gpt한테 코드리뷰 받고 리펙
  const handleValueChange = (e: SyntheticEvent<HTMLInputElement>) => {
    const { value } = e.target as HTMLInputElement;

    let errorMessage = '';

    // TODO: 수정할 수 있다면 수정
    if (e.type === 'change') {
      if (isNaN(Number(value))) {
        errorMessage = ERROR_MESSAGES.NOT_NUMBER;
        // } else if (value.length < maxLength && value !== '') {
        //   errorMessage = ERROR_MESSAGES.MAX_LENGTH(maxLength);
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

  return { value, setValue: handleValueChange, errorMessage, isValid };
};

export default useNumberInput;
