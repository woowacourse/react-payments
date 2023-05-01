import { UseInputProps } from '../hooks/useInput';
import { InputDetailInfo } from './formValidate';

export interface InputValuesInformationProps extends UseInputProps {
  element: HTMLInputElement;
}

export const createValidationInputInformation = (
  inputValues: InputValuesInformationProps[]
) => {
  const validationInputInformation: InputDetailInfo[] = [];

  inputValues.forEach((item) => {
    validationInputInformation.push({
      name: item.name,
      element: item.element,
      maxLength: item.maxLength,
      isRequired: item.required,
      setError: item.setError,
      errorMessage: item.error,
      validation: item.validate,
    });
  });

  const validationInputKey = inputValues.map((item) => item.name);

  return { validationInputInformation, validationInputKey };
};
