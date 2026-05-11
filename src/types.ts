import { CARD_COMPANY_OPTIONS } from './constants';

export interface CardInfo {
  cardNumbers: [string, string, string, string];
  expirationPeriod: [string, string];
  cvc: string;
  cardBrand: CardBrand;
  cardCompany: CardCompany;
  password: string;
}

export type CardBrand = 'local' | 'visa' | 'mastercard' | 'amex' | 'diners' | 'unionpay';

export type CardCompany = (typeof CARD_COMPANY_OPTIONS)[number]['value'];

export type ErrorStatus = null | 'required' | 'invalidLength' | 'numberOnly';

export type ExpirationPeriodErrorStatus = ErrorStatus | 'invalidMonth' | 'invalidYear';
