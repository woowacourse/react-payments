export interface ValidateResult {
  hasError: boolean;
  message?: string;
  allowInput?: boolean;
}

export type InputValidator = (value: string) => ValidateResult;
