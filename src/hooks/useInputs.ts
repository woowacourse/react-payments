import { useState } from 'react';

export interface InputsType<T> {
  values: T[];
  isValidList: boolean[];
  isErrorList: boolean[];
  handleValues: (newValues: T[], index: number) => void;
}

const useInputs = <T>(validateFunction: (value: T) => boolean, defaultValue: T[]): InputsType<T> => {
  const [values, setValues] = useState(defaultValue);
  const [isValidList, setIsValidList] = useState(defaultValue.map(() => false));
  const [isClickedList, setIsClickedList] = useState(defaultValue.map(() => false));

  const handleValues = (newValues: T[], index: number) => {
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
