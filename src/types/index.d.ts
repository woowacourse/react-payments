import { InputHTMLAttributes } from 'react';

export interface RegisterFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  isError: boolean;
}

export type InitialCardNumberState = {
  value: string;
  isError: boolean;
};

export type RegisterStep =
  | 'cardNumbers'
  | 'cardIssuer'
  | 'cardExpirationDate'
  | 'cardOwnerName'
  | 'cardCvc'
  | 'cardPassword';

export type RegisterComponentProps = {
  step: RegisterStepType;
};

export type RegisterFieldInfos = {
  cardNumbers: InitialCardNumberState[];
  month: string;
  year: string;
  cvc: string;
  password: string;
  name: string;
};

type CardIssuer = {
  cardIssuer: AllCardIssuer;
};

export type AllCardIssuer =
  | ''
  | 'BC카드'
  | '신한카드'
  | '카카오뱅크'
  | '현대카드'
  | '우리카드'
  | '롯데카드'
  | '하나카드'
  | '국민카드';

export type CardIssuerBackgroundColor =
  | ''
  | 'rgba(240, 70, 81, 1)'
  | 'rgba(0, 70, 255, 1)'
  | 'rgba(255, 230, 0, 1)'
  | 'rgba(0, 0, 0, 1)'
  | 'rgba(0, 123, 200, 1)'
  | 'rgba(237, 28, 36, 1)'
  | 'rgba(0, 148, 144, 1)'
  | 'rgba(106, 96, 86, 1)';

export type ConfirmPageRouteProps = {
  cardNumbers: string;
  cardIssuer: AllCardIssuer;
};
