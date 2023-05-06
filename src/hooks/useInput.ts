import { useState } from 'react';
import { ERROR_MESSAGE } from '../utils/Constants';
import { isOverLength } from '../utils/InputValidate';

export const useInput = (
  inputType: (inputValue: string, maxLength: number) => boolean,
  maxLength: number
) => {
  const [value, setValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;

    if (isOverLength(inputValue, maxLength)) return;
    if (inputType(inputValue, maxLength)) {
      setErrorMessage(ERROR_MESSAGE.ONLY_NUMBER);
      return;
    }

    setValue(inputValue.toUpperCase());
    setErrorMessage('');
  };

  return { value, errorMessage, handleChangeInput };
};
