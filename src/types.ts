export interface CardInfo {
  cardNumbers: [string, string, string, string];
  cardCompany: CardCompany;
  expirationPeriod: [string, string];
  cvc: string;
}

export type CardCompany =
  | null
  | 'BC카드'
  | '신한카드'
  | '카카오뱅크'
  | '현대카드'
  | '우리카드'
  | '롯데카드'
  | '하나카드'
  | '국민카드';

export type CardBrand = 'local' | 'visa' | 'mastercard';

export type ErrorStatus = null | 'required' | 'invalidLength' | 'numberOnly';

export type ExpirationPeriodErrorStatus = ErrorStatus | 'invalidMonth' | 'invalidYear';

export interface Validate<T> {
  type: ('change' | 'blur')[];
  rule: (inputValue: string, index?: number) => boolean;
  errorStatus: T;
}
