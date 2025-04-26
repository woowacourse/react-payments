import { useState, ChangeEvent } from 'react';
import { InputFieldState } from '../types/models';

type FieldValidationFunction = (value: string) => {
  isValid: boolean;
  errorMessage: string;
};

function useInputField(
  initialValue: string,
  placeholder: string,
  maximumLength: number,
  validationFunction: FieldValidationFunction
): [InputFieldState, (event: ChangeEvent<HTMLInputElement>) => void] {
  const [fieldState, setFieldState] = useState<InputFieldState>({
    value: initialValue,
    hasError: false,
    placeholder,
    maximumLength,
    errorMessage: '',
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const inputValue = event.target.value;
    const { isValid, errorMessage } = validationFunction(inputValue);
    setFieldState((prev) => ({
      ...prev,
      value: isValid ? inputValue : prev.value,
      hasError: !isValid,
      errorMessage: isValid ? '' : errorMessage,
    }));
  };

  return [fieldState, handleChange];
}

type MultipleFieldValidationFunction = (
  value: string,
  index: number,
  maximumLength: number
) => { isValid: boolean; errorMessage: string };

function useMultipleInputFields(
  initialValues: string[],
  placeholders: string[],
  maximumLength: number,
  validationFunction: MultipleFieldValidationFunction
): [
  InputFieldState[],
  (event: ChangeEvent<HTMLInputElement>, index: number) => void
] {
  const [fieldStates, setFieldStates] = useState<InputFieldState[]>(() =>
    initialValues.map((value, idx) => ({
      value,
      hasError: false,
      placeholder: placeholders[idx] || '',
      maximumLength,
      errorMessage: '',
    }))
  );

  const handleChange = (
    event: ChangeEvent<HTMLInputElement>,
    index: number
  ): void => {
    const inputValue = event.target.value;
    const { isValid, errorMessage } = validationFunction(
      inputValue,
      index,
      maximumLength
    );
    setFieldStates((prev) =>
      prev.map((state, i) =>
        i === index
          ? {
              ...state,
              value: isValid ? inputValue : state.value,
              hasError: !isValid,
              errorMessage: isValid ? '' : errorMessage,
            }
          : state
      )
    );
  };

  return [fieldStates, handleChange];
}

export type {
  InputFieldState,
  FieldValidationFunction,
  MultipleFieldValidationFunction,
};
export { useInputField, useMultipleInputFields };
