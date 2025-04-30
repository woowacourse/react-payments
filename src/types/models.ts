import { ChangeEvent, RefObject } from 'react';

interface InputFieldState {
  value: string;
  hasError: boolean;
  placeholder: string;
  maximumLength: number;
  errorMessage: string;
}

interface FormFieldState {
  brand: string;
  numberFields: InputFieldState[];
  expiryFields: InputFieldState[];
  cvcField: InputFieldState;
  passwordField: InputFieldState;
}

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
  RefObject<HTMLInputElement | null>,
  () => void
];

interface UseInputFieldArrayParams {
  initialValues: string[];
  placeholders: string[];
  maximumLength: number;
  validationFunction: (
    value: string,
    index: number,
    maximumLength: number
  ) => ValidationResult;
}

type UseInputFieldArrayReturn = [
  InputFieldState[],
  (event: ChangeEvent<HTMLInputElement>, index: number) => void,
  RefObject<HTMLInputElement | null>[],
  () => void
];

export type {
  InputFieldState,
  FormFieldState,
  ValidationResult,
  UseInputFieldParams,
  UseInputFieldReturn,
  UseInputFieldArrayParams,
  UseInputFieldArrayReturn,
};
