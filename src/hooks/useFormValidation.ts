import { useMemo } from 'react';
import { InputFieldState } from '../types/models';

export interface FormValidationParams {
  numberFields: InputFieldState[];
  expiryFields: InputFieldState[];
  cvcField: InputFieldState;
  passwordField: InputFieldState;
  selectedBrand: string;
}

export default function useFormValidation({
  numberFields,
  expiryFields,
  cvcField,
  passwordField,
  selectedBrand,
}: FormValidationParams): boolean {
  return useMemo(() => {
    if (!selectedBrand) return false;
    const allFields = [
      ...numberFields,
      ...expiryFields,
      cvcField,
      passwordField,
    ];
    return allFields.every(
      (field) => !field.hasError && field.value.length === field.maximumLength
    );
  }, [numberFields, expiryFields, cvcField, passwordField, selectedBrand]);
}
