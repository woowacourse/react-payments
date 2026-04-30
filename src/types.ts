export interface CardInfo {
  cardNumbers: string[];
  expirationPeriod: string[];
  cvc: string;
  cardBrand: CardBrand;
}

export type CardBrand = 'local' | 'visa' | 'mastercard';

export type ErrorStatus = null | 'required' | 'invalidLength' | 'numberOnly';

export type ExpirationPeriodErrorStatus = ErrorStatus | 'invalidMonth' | 'invalidYear';
