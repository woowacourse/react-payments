import { useState, useRef, ChangeEvent, createRef, RefObject } from 'react';
import { InputFieldState } from '../types/models';

interface ValidationResult {
  isValid: boolean;
  errorMessage: string;
}

interface UseInputFieldParams {
  initialValue: string;
  placeholder: string;
  maximumLength: number;
  validationFunction: (value: string) => ValidationResult;
}

type UseInputFieldReturn = [
  InputFieldState,
  (event: ChangeEvent<HTMLInputElement>) => void,
  RefObject<HTMLInputElement | null>
];

function useInputField({
  initialValue,
  placeholder,
  maximumLength,
  validationFunction,
}: UseInputFieldParams): UseInputFieldReturn {
  const [fieldState, setFieldState] = useState<InputFieldState>({
    value: initialValue,
    hasError: false,
    placeholder,
    maximumLength,
    errorMessage: '',
  });

  const inputRef = useRef<HTMLInputElement | null>(null);

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

  return [fieldState, handleChange, inputRef];
}

interface ValidationResult {
  isValid: boolean;
  errorMessage: string;
}

interface UseInputFieldsParams {
  initialValues: string[];
  placeholders: string[];
  maximumLength: number;
  validationFunction: (
    value: string,
    index: number,
    maximumLength: number
  ) => ValidationResult;
}

type UseInputFieldsReturn = [
  InputFieldState[],
  (event: ChangeEvent<HTMLInputElement>, index: number) => void,
  RefObject<HTMLInputElement | null>[]
];

function useMultipleInputFields({
  initialValues,
  placeholders,
  maximumLength,
  validationFunction,
}: UseInputFieldsParams): UseInputFieldsReturn {
  const [fieldStates, setFieldStates] = useState<InputFieldState[]>(() =>
    initialValues.map((value, idx) => ({
      value,
      hasError: false,
      placeholder: placeholders[idx] || '',
      maximumLength,
      errorMessage: '',
    }))
  );

  const inputRefs = useRef<RefObject<HTMLInputElement | null>[]>(
    initialValues.map(() => createRef<HTMLInputElement>())
  ).current;

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

    if (isValid && inputValue.length === maximumLength) {
      const nextRef = inputRefs[index + 1];
      if (nextRef && nextRef.current) {
        nextRef.current.focus();
      }
    }
  };

  return [fieldStates, handleChange, inputRefs];
}

export { useInputField, useMultipleInputFields };
