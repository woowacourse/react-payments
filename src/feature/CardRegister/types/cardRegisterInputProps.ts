import type {ChangeEventHandler, FocusEventHandler} from 'react';

export type CardRegisterInputProps = {
  type?: 'text' | 'password';
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
