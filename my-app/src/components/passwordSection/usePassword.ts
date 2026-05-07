import { useState } from 'react';
import { getPasswordError, isInputValidate } from '../../utils/Validation';

interface Props {
  value: string;
  setValue: (value: string) => void;
}

export const usePassword = ({ value, setValue }: Props) => {
  const [error, setError] = useState<boolean>(false);

  const handleOnChange = (inputValue: string) => {
    if (!isInputValidate(inputValue, 2)) return;
    setValue(inputValue);
  };

  const handleOnBlur = (inputValue: string) => {
    setError(getPasswordError(inputValue) !== '');
  };

  const finalErrorMessage = error ? getPasswordError(value) : '';

  return {
    error,
    handleOnChange,
    handleOnBlur,
    finalErrorMessage,
  };
};
