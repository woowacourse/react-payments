export interface ValidateResult {
  hasError: boolean;
  message?: string;
}

export type InputValidator = (value: string) => ValidateResult;
