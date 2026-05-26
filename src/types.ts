export interface CardInfo {
  cardNumbers: [string, string, string, string];
  expirationPeriod: [string, string];
  cvc: string;
  cardBrand: CardBrand;
  cardCompany: CardCompany | '';
  password: string;
}

export type CardBrand = 'local' | 'visa' | 'mastercard' | 'amex' | 'diners' | 'unionpay';

export type CardCompany = 'bc' | 'shinhan' | 'kakao' | 'hyundai' | 'woori' | 'lotte' | 'hana' | 'kookmin';

export type ValidationTrigger = 'onChange' | 'onBlur' | 'onComplete';

export type ErrorStatus = null | 'required' | 'invalidLength' | 'numberOnly';

export type ExpirationPeriodErrorStatus = ErrorStatus | 'invalidMonth' | 'invalidYear';

interface ValidationRule<N extends string> {
  name: N;
  fn: (value: string) => boolean;
  on: ValidationTrigger[];
}

export type BaseValidationRule = ValidationRule<Exclude<ErrorStatus, null>>;
export type ExpirationValidationRule = ValidationRule<Exclude<ExpirationPeriodErrorStatus, null>>;
