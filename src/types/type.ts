export type ButtonType = 'button' | 'submit' | 'reset';

export type InputType =
  | 'button'
  | 'checkbox'
  | 'color'
  | 'date'
  | 'datetime-local'
  | 'email'
  | 'file'
  | 'hidden'
  | 'image'
  | 'month'
  | 'number'
  | 'password'
  | 'radio'
  | 'range'
  | 'reset'
  | 'search'
  | 'submit'
  | 'tel'
  | 'text'
  | 'url'
  | 'week';

export type CardValues = {
  firstCardNumber: string;
  secondCardNumber: string;
  thirdCardNumber: string;
  fourthCardNumber: string;
  expiredMonth: string;
  expiredYear: string;
  owner: string;
  cvc: string;
  firstPasswordDigit: string;
  secondPasswordDigit: string;
};
