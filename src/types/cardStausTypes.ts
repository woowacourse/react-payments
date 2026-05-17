import type { UUID } from 'crypto';

import type {
  CardError,
  DateError,
  MonthError,
  YearError,
  CvcError,
  PasswordError,
} from './errorTypes';

export interface CardStatus {
  cardNumbers: string[];
  cardNumberErrorMode: CardError | 'normal' | '';
  cardBrand: CardBrandType;
}

export interface CardHandler {
  handleCardNumbers: (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => void;
  validateCardNumbers: () => void;
}

export interface CardExpiry {
  cardExpiryDate: string[];
  cardExpiryDateErrorMode: DateError | MonthError | YearError | 'normal' | '';
}

export interface ExpireHandler {
  handleCardExpiryDate: (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleYearBlur: () => void;
  handleMonthBlur: () => void;
}

export interface Cvc {
  cardCvc: string;
  cardCvcErrorMode: CvcError | 'normal';
}

export interface CvcHandler {
  handleCardCvc: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleCvcBlur: () => void;
}

export interface Password {
  cardPassword: string;
  cardPasswordErrorMode: PasswordError | 'normal';
}

export interface PasswordHandler {
  handleCardPassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlePasswordBlur: () => void;
}

export type CardBrandType = 'visa' | 'master' | 'diners' | 'amex' | 'unionPay' | 'unknown';

export type CardIssuerType =
  | 'bcCard'
  | 'shCard'
  | 'kakaoCard'
  | 'hyundaiCard'
  | 'wooriCard'
  | 'lotteCard'
  | 'hanaCard'
  | 'kbCard';

export type CardInfo = {
  id?: UUID;
  number: string;
  expirationDate: string;
  cvc: string;
  issuerCode: string;
};

export type CardResponse = {
  id: UUID;
  issuerCode: string;
  number: string;
  expirationDate: string;
};
