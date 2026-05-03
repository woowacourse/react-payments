import type { CardError, DateError, MonthError, YearError, CvcError } from './errorTypes';

export interface CardStatus {
  cardNumbers: string[];
  cardNumberErrorMode: CardError | 'normal';
  cardBrand: string;
}

export interface CardHandler {
  handleCardNumbers: (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleCardNumbersBlur: () => void;
}

export interface CardExpiry {
  cardExpiryDate: string[];
  cardExpiryDateErrorMode: DateError | MonthError | YearError | 'normal';
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
