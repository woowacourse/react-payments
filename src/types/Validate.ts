export interface ValidateResult {
  hasError: boolean;
  message?: string;
  isAllowInput?: boolean;
}

export type InputValidator = (value: string) => ValidateResult;
