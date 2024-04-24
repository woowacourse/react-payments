import useInput, { useInputOption } from './useInput';

import { useState } from 'react';

interface validatorProps {
  checkIsValid: (input: string) => boolean;
  errorMessage: string;
}

interface validatedInputProps extends useInputOption {
  validatorPropsArray: validatorProps[];
}

export interface ValidateInput {
  inputValue: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  errorMessage: string;
}

export default function useValidateInput({
  decorateValue,
  validatorPropsArray,
}: validatedInputProps) {
  const { inputValue: inputValue, onChange: inputOnChange } = useInput({
    decorateValue,
  });
  const [errorMessage, setErrorMessage] = useState('');

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    const errorObj = validatorPropsArray.find(validatorProps => {
      return !validatorProps.checkIsValid(newValue);
    });
    if (!errorObj) {
      inputOnChange(event);
      setErrorMessage('');
      return;
    }
    setErrorMessage(errorObj.errorMessage);
  };

  return { inputValue, onChange, errorMessage };
}
