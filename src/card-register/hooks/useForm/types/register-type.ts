import React from 'react';

export type UseFormRegister = (name: string, options?: UseFormRegisterOption) => UseFormRegisterReturn;

export type UseFormRegisterOption = Partial<{
  validate: ValidateHandler;
  onChange: ChangeHandler;
  onBlur: BlurHandler;
  onFocus: BlurHandler;
  required: ValidationOption<boolean>;
  maxLength: ValidationOption<number>;
  minLength: ValidationOption<number>;
  min: ValidationOption<number>;
  max: ValidationOption<number>;
  pattern: ValidationOption<string>;
}>;

export type UseFormRegisterReturn = {
  onChange: ChangeHandler;
  onFocus: BlurHandler;
  onBlur: BlurHandler;
  onKeyUp?: KeyUpHandler;
  ref: RefCallBack;
  name: string;
};

export type ValidateHandler = (val: any) => string | boolean;
export type ChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => void;
export type BlurHandler = (event: React.FocusEvent<HTMLInputElement>) => void;
export type FocusHandler = BlurHandler;
export type KeyUpHandler = (event: React.KeyboardEvent<HTMLInputElement>) => void;
export type ValidationOption<T> = {
  value: T;
  message?: string;
};
export type RefCallBack = (instance: HTMLInputElement) => void;
