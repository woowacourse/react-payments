import { useState } from 'react';

export interface InputsType {
  values: string[];
  isValidList: boolean[];
  isErrorList: boolean[];
  handleValues: (newValues: string[], index: number) => void;
}

const useInputs = (validateFunction: (value: string) => boolean, defaultValue: string[]) => {
  const [values, setValues] = useState(defaultValue);
  const [isValidList, setIsValidList] = useState(defaultValue.map(() => false));
  const [isClickedList, setIsClickedList] = useState(defaultValue.map(() => false));

  const handleValues = (newValues: string[], index: number) => {
    if (!isClickedList[index]) {
      const newIsClickedList = [...isClickedList];
      newIsClickedList[index] = true;

      setIsClickedList(newIsClickedList);
    }

    setIsValidList(newValues.map((value) => validateFunction(value)));
    setValues(newValues);
  };

  return {
    values,
    isValidList,
    isErrorList: isClickedList.map((isClicked, index) => isClicked && !isValidList[index]),
    handleValues,
  };
};

export default useInputs;
