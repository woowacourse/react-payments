import { useState } from 'react';

export interface InputType<T> {
  value: T;
  isValid: boolean;
  isError: boolean;
  handleValue: (newValue: T) => void;
}

const useInput = <T>(validateFunction: (value: T) => boolean, defaultValue: T): InputType<T> => {
  const [value, setValue] = useState<T>(defaultValue);
  const [isValid, setIsValid] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleValue = (newValue: T) => {
    if (!isClicked) setIsClicked(true);

    setIsValid(validateFunction(newValue));
    setValue(newValue);
  };

  return { value, isValid, isError: isClicked && !isValid, handleValue };
};

export default useInput;
