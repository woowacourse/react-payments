import { ValidationType } from '../hooks/useValidation';

export type Position = 'first' | 'second' | 'third' | 'fourth';

export type CardNumber = {
  first: string;
  second: string;
  third: string;
  fourth: string;
};

export type ExpirationPeriod = {
  month: string;
  year: string;
};

export type CardNumberProps = {
  cardNumber: CardNumber;
  changeCardNumber: (position: Position, cardNumber: string) => void;
  viewNextInput: () => void;
  getErrorMessage: (field: ValidationType, value: string) => string;
  isInvalid: (field: ValidationType, value: string) => boolean;
};

export type ExpirationPeriodProps = {
  expirationPeriod: ExpirationPeriod;
  changeExpirationPeriod: (expirationPeriod: keyof ExpirationPeriod, date: string) => void;
  viewNextInput: () => void;
  getErrorMessage: (field: ValidationType, value: string) => string;
  isInvalid: (field: ValidationType, value: string) => boolean;
};

export type CardCVCNumberSectionProps = {
  CVCNumber: string;
  changeCVCNumber: (CVCNumber: string) => void;
  viewNextInput: () => void;
  getErrorMessage: (field: ValidationType, value: string) => string;
  isInvalid: (field: ValidationType, value: string) => boolean;
};

export type CardPasswordSectionProps = {
  password: string;
  changePassword: (password: string) => void;
  viewNextInput: () => void;
  getErrorMessage: (field: ValidationType, value: string) => string;
  isInvalid: (field: ValidationType, value: string) => boolean;
};
