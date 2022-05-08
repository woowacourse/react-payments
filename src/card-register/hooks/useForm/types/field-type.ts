import { ValidateHandler, ChangeHandler, BlurHandler } from './register-type';

export type NativeValidityErrorType = Exclude<keyof ValidityState, 'customError' | 'valid'>;

export type ValidityMessage = Partial<Record<NativeValidityErrorType, string>>;

export type Field = {
  _ref: HTMLInputElement;
  validate?: ValidateHandler;
  onChange?: ChangeHandler;
  onFocus?: BlurHandler;
  onBlur?: BlurHandler;
  validityMessage: ValidityMessage;
  isBackspacePressedOnEmptyInput: boolean;
};

export type FieldName = string;
export type FieldValues = Record<string, any>;
export type FieldErrorType = NativeValidationPropKey | 'custom';
export type FieldErrors = Record<string, ErrorMessage>;
export type NativeValidationPropKey = 'maxLength' | 'minLength' | 'min' | 'max' | 'required' | 'pattern';
export type NativeValidationProps = {
  maxLength: number;
  minLength: number;
  min: number;
  max: number;
  required: boolean;
  pattern: RegExp;
};
export type ErrorMessage = string;
