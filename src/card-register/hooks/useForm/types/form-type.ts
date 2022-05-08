import React, { MutableRefObject } from 'react';
import { UseFormRegister } from './register-type';
import { FieldErrors, FieldValues } from './field-type';
import { Subject } from './watch-type';

export type UseForm = (props: UseFormProps) => UseFormReturn;

export type UseFormReturn = {
  formState: UseFormState;
  handleSubmit: UseFormHandleSubmit;
  register: UseFormRegister;
  _fieldValueSubject: MutableRefObject<Subject | undefined>;
  watch: (name: string, callback: (newValue: string) => void) => void;
};

export type UseFormProps = {
  shouldValidateOnChange?: boolean;
  shouldUseAutoFocus?: boolean;
  shouldShowNativeHint?: boolean;
};

export type FormProviderProps = {
  children: React.ReactNode;
} & UseFormReturn;

export type UseFormState = {
  isSubmitted: boolean;
  isSubmitting: boolean;
  isSubmitSuccessful: boolean;
  errors: FieldErrors;
  isValid: boolean;
};

export type UseFormHandleSubmit = (
  onSubmit: (event: React.FormEvent<HTMLFormElement>, submitResult: UseFormSubmitResult) => void,
) => (event: React.FormEvent<HTMLFormElement>) => void;

export type UseFormSubmitResult = {
  isValid: boolean;
  values?: FieldValues;
  errors?: FieldErrors;
};

export type FormControlProps = {
  formState: UseFormState;
  updateFormState: (newFormState: UseFormState) => void;
} & UseFormProps;
