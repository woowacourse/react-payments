import type { CARD_COMPANIES } from './constants.ts';

export interface CardInfo {
  cardNumbers: string[];
  cardCompany: CardCompany;
  expirationPeriod: string[];
  cvc: string;
  password: string;
}

export type CardCompany = (typeof CARD_COMPANIES)[keyof typeof CARD_COMPANIES]['kr'] | null;

export type CardBrand = 'local' | 'visa' | 'mastercard' | 'diners' | 'amex' | 'unionpay';

export type ErrorStatus = null | 'required' | 'invalidLength' | 'numberOnly' | 'invalidValue';

export type ExpirationPeriodErrorStatus = ErrorStatus | 'invalidMonth' | 'invalidYear';

export interface Validate<T> {
  type: ('change' | 'blur')[];
  rule: (inputValue: string, index?: number) => boolean;
  errorStatus: T;
}

export type ResponseStatus = 'idle' | 'loading' | 'success' | 'error';
