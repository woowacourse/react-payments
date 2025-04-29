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
  const [value, setValue] = useState(initialValue);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const next = event.target.value;
    const { isValid, errorMessage } = validationFunction(next);

    if (isValid) {
      setValue(next);
      setHasError(false);
      setErrorMessage('');
    } else {
      setHasError(true);
      setErrorMessage(errorMessage);
    }
  };

  const fieldState: InputFieldState = {
    value,
    hasError,
    errorMessage,
    placeholder,
    maximumLength,
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
  const [values, setValues] = useState<string[]>(initialValues);
  const [errors, setErrors] = useState<
    { hasError: boolean; errorMessage: string }[]
  >(initialValues.map(() => ({ hasError: false, errorMessage: '' })));

  const inputRefs = useRef<RefObject<HTMLInputElement | null>[]>(
    initialValues.map(() => createRef<HTMLInputElement>())
  ).current;

  const handleChange = (
    event: ChangeEvent<HTMLInputElement>,
    index: number
  ): void => {
    const next = event.target.value;
    const { isValid, errorMessage } = validationFunction(
      next,
      index,
      maximumLength
    );

    setValues((prev) =>
      prev.map((value, i) => (i === index && isValid ? next : value))
    );
    setErrors((prev) =>
      prev.map((error, i) =>
        i === index
          ? { hasError: !isValid, errorMessage: isValid ? '' : errorMessage }
          : error
      )
    );

    if (isValid && next.length === maximumLength) {
      const nextRef = inputRefs[index + 1];
      if (nextRef?.current) nextRef.current.focus();
    }
  };

  const fieldStates: InputFieldState[] = values.map((value, i) => ({
    value,
    hasError: errors[i].hasError,
    errorMessage: errors[i].errorMessage,
    placeholder: placeholders[i] ?? '',
    maximumLength,
  }));

  return [fieldStates, handleChange, inputRefs];
}

export { useInputField, useMultipleInputFields };
