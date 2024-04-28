import { useState } from 'react';

export interface InputType {
  value: string;
  isValid: boolean;
  isError: boolean;
  handleValue: (newValue: string) => void;
}

const useInput = (validateFunction: (value: string) => boolean, defaultValue: string = '') => {
  const [value, setValue] = useState(defaultValue);
  const [isValid, setIsValid] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleValue = (newValue: string) => {
    if (!isClicked) setIsClicked(true);

    setIsValid(validateFunction(newValue));
    setValue(newValue);
  };

  return { value, isValid, isError: isClicked && !isValid, handleValue };
};

export default useInput;
