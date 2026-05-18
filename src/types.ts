export interface CardInfo {
  cardNumbers: string[];
  cardCompany: CardCompany;
  expirationPeriod: string[];
  cvc: string;
  password: string;
}

// TODO: CardCompanies 기반으로 동기화 필요
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

export type CardBrand = 'local' | 'visa' | 'mastercard' | 'diners' | 'amex' | 'unionpay';

export type ErrorStatus = null | 'required' | 'invalidLength' | 'numberOnly' | 'invalidValue';

export type ExpirationPeriodErrorStatus = ErrorStatus | 'invalidMonth' | 'invalidYear';

export interface Validate<T> {
  type: ('change' | 'blur')[];
  rule: (inputValue: string, index?: number) => boolean;
  errorStatus: T;
}

export type ResponseStatus = 'idle' | 'loading' | 'success' | 'error';
