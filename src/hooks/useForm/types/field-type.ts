import { ValidateHandler, ChangeHandler, BlurHandler, FocusHandler } from './register-type';

export type NativeValidityErrorType = Exclude<keyof ValidityState, 'customError' | 'valid'>;

export type ValidityMessage = Partial<Record<NativeValidityErrorType, string>>;

export type Field = {
  _ref: HTMLInputElement;
  validate?: ValidateHandler;
  onChange?: ChangeHandler;
  onFocus?: FocusHandler;
  onBlur?: BlurHandler;
  validityMessage: ValidityMessage;
  isBackspacePressedOnEmptyInput: boolean;
};

export type FieldName = string;
export type FieldValues = Record<string, any>;
export type FieldErrors = Record<string, ErrorMessage>;
export type ErrorMessage = string;
