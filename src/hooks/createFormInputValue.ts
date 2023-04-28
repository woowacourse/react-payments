import { UseInputProps } from './useInput';
import { InputDetailInfo } from './formValidate';

export interface InputValuesInformationProps extends UseInputProps {
  element: HTMLInputElement;
}

export const createFormInputValue = (
  inputValues: InputValuesInformationProps[]
) => {
  const inputValueInfomation: InputDetailInfo[] = [];

  inputValues.forEach((item) => {
    inputValueInfomation.push({
      name: item.name,
      element: item.element,
      maxLength: item.maxLength,
      isRequired: item.required,
      setError: item.setError,
      errorMessage: item.error,
      validation: item.validate,
    });
  });

  const inputKey = inputValues.map((item) => item.name);

  return { inputValueInfomation, inputKey };
};
