export interface CardInfo {
  cardNumbers: [string, string, string, string];
  expirationPeriod: [string, string];
  cvc: string;
}

export type CardBrand = 'local' | 'visa' | 'mastercard';

export type ErrorStatus = null | 'required' | 'invalidLength' | 'numberOnly';

export type ExpirationPeriodErrorStatus = ErrorStatus | 'invalidMonth' | 'invalidYear';

export interface Validate<T = ErrorStatus> {
  type: ('change' | 'blur')[];
  rule: (inputValue: string, index?: number) => boolean;
  errorStatus: T;
}
