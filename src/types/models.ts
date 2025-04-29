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

export type { InputFieldState, FormFieldState };
