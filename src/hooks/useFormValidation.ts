import { InputFieldState } from '../types/models';

interface FormValidationParams {
  numberFields: InputFieldState[];
  expiryFields: InputFieldState[];
  cvcField: InputFieldState;
  passwordField: InputFieldState;
  selectedBrand: string;
}

function useFormValidation(params: FormValidationParams): boolean {
  const { numberFields, expiryFields, cvcField, passwordField, selectedBrand } =
    params;
  if (!selectedBrand) return false;
  const allFields = [...numberFields, ...expiryFields, cvcField, passwordField];
  return allFields.every(
    (f) => !f.hasError && f.value.length === f.maximumLength
  );
}

export default useFormValidation;
