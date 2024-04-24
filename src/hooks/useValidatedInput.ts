import { useState } from 'react';

const useValidatedInput = (validateFunction: (value: string) => boolean, defaultValue: string = '') => {
  const [value, setValue] = useState(defaultValue);
  const [isValid, setIsValid] = useState(false);

  const handleValue = (newValue: string) => {
    if (validateFunction !== undefined) {
      const newIsValid = validateFunction(newValue);

      setIsValid(newIsValid);
      setValue(newIsValid ? newValue : '');
    } else {
      setValue(newValue);
    }
  };

  return { value, isValid, handleValue };
};

export default useValidatedInput;
