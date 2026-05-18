import type {
  CardError,
  DateError,
  MonthError,
  YearError,
  CvcError,
  PasswordError,
} from './errorTypes';

export type CardBrand = '' | 'visa' | 'master' | 'diners' | 'amex' | 'unionpay';

export type CardCompany =
  | ''
  | 'bc'
  | 'shinhan'
  | 'kakao'
  | 'hyundai'
  | 'woori'
  | 'lotte'
  | 'hana'
  | 'kookmin';

export interface CardStatus {
  cardNumbers: string[];
  cardNumberErrorMode: CardError | null;
  cardBrand: CardBrand;
}

export interface CardHandler {
  handleCardNumbers: (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleCardNumbersBlur: () => void;
}

export interface CardCompanyStatus {
  cardCompany: CardCompany;
}

export interface CardCompanyHandler {
  handleCardCompany: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export interface CardExpiry {
  cardExpiryDate: string[];
  cardExpiryDateErrorMode: DateError | MonthError | YearError | null;
}

export interface ExpiryHandler {
  handleCardExpiryDate: (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleYearBlur: () => void;
  handleMonthBlur: () => void;
}

export interface Cvc {
  cardCvc: string;
  cardCvcErrorMode: CvcError | null;
}

export interface CvcHandler {
  handleCardCvc: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleCvcBlur: () => void;
}

export interface CardPassword {
  cardPassword: string;
  cardPasswordErrorMode: PasswordError | null;
}

export interface CardPasswordHandler {
  handleCardPassword: (value: string) => void;
  handlePasswordBlur: () => void;
}

export type CardBrandRange = {
  brand: Exclude<CardBrand, ''>;
  end: string;
  start: string;
};
