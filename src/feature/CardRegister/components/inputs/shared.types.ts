import type {ChangeEventHandler, FocusEventHandler, HTMLAttributes, HTMLInputTypeAttribute} from 'react';

export type CardRegisterInputProps = {
  type?: HTMLInputTypeAttribute;
  inputMode?: HTMLAttributes<HTMLInputElement>['inputMode'];
  value: string;
  maxLength: number;
  placeholder: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onBlur: FocusEventHandler<HTMLInputElement>;
};

export type ExpiryInputProps = {
  month: CardRegisterInputProps;
  year: CardRegisterInputProps;
};
