import { useState } from 'react';

export interface InputsType {
  values: string[];
  isValid: boolean[];
  isClicked: boolean[];
  handleValues: (newValues: string[], index: number) => void;
}

const useValidatedInputs = (validateFunction: (value: string) => boolean, defaultValue: string[]) => {
  const [values, setValues] = useState(defaultValue);
  const [isValid, setIsValid] = useState(defaultValue.map(() => false));
  const [isClicked, setIsClicked] = useState(defaultValue.map(() => false));

  const handleValues = (newValues: string[], index: number) => {
    if (!isClicked[index]) {
      const newIsClicked = [...isClicked];
      newIsClicked[index] = true;

      setIsClicked(newIsClicked);
    }

    setIsValid(newValues.map((value) => validateFunction(value)));
    setValues(newValues);
  };

  return { values, isValid, isClicked, handleValues };
};

export default useValidatedInputs;
