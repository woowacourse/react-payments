import { useState } from 'react';

const useValidatedInputs = (validateFunction: (value: string) => boolean, defaultValue: string[]) => {
  const [values, setValues] = useState(defaultValue);
  const [isValid, setIsValid] = useState(defaultValue.map(() => false));

  const handleValues = (newValues: string[]) => {
    const newIsValid = [...isValid];

    const updatedValues = newValues.map((value, index) => {
      const isValid = validateFunction(value);
      newIsValid[index] = isValid;

      return isValid ? value : '';
    });

    setIsValid(newIsValid);
    setValues(updatedValues);
  };

  return { values, isValid, handleValues };
};

export default useValidatedInputs;
