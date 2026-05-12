import { fn } from 'storybook/test';
import type {
  CardCompanyHandler,
  CardCompanyStatus,
  CardExpiry,
  CardHandler,
  CardPassword,
  CardPasswordHandler,
  CardStatus,
  Cvc,
  CvcHandler,
  ExpireHandler,
} from '../types/cardStausTypes';

export const createCardNumberHandlers = (): CardHandler => ({
  handleCardNumbers: () => fn(),
  handleCardNumbersBlur: fn(),
});

export const createCardCompanyHandler = (): CardCompanyHandler => ({
  handleCardCompany: fn(),
});

export const createExpiryHandlers = (): ExpireHandler => ({
  handleCardExpiryDate: () => fn(),
  handleYearBlur: fn(),
  handleMonthBlur: fn(),
});

export const createCvcHandlers = (): CvcHandler => ({
  handleCardCvc: fn(),
  handleCvcBlur: fn(),
});

export const createPasswordHandlers = (): CardPasswordHandler => ({
  handleCardPassword: fn(),
  handlePasswordBlur: fn(),
});

export const emptyCardStatus: CardStatus = {
  cardNumbers: ['', '', '', ''],
  cardNumberErrorMode: null,
  cardBrand: '',
};

export const visaCardStatus: CardStatus = {
  cardNumbers: ['4123', '1234', '1234', '1234'],
  cardNumberErrorMode: null,
  cardBrand: 'visa',
};

export const masterCardStatus: CardStatus = {
  cardNumbers: ['5123', '1234', '1234', '1234'],
  cardNumberErrorMode: null,
  cardBrand: 'master',
};

export const dinersCardStatus: CardStatus = {
  cardNumbers: ['3612', '345678', '9012'],
  cardNumberErrorMode: null,
  cardBrand: 'diners',
};

export const amexCardStatus: CardStatus = {
  cardNumbers: ['3712', '345678', '90123'],
  cardNumberErrorMode: null,
  cardBrand: 'amex',
};

export const unionPayCardStatus: CardStatus = {
  cardNumbers: ['6221', '2612', '3456', '7890'],
  cardNumberErrorMode: null,
  cardBrand: 'unionpay',
};

export const emptyCardCompanyStatus: CardCompanyStatus = {
  cardCompany: '',
};

export const bcCardCompanyStatus: CardCompanyStatus = {
  cardCompany: 'bc',
};

export const kakaoCardCompanyStatus: CardCompanyStatus = {
  cardCompany: 'kakao',
};

export const hyundaiCardCompanyStatus: CardCompanyStatus = {
  cardCompany: 'hyundai',
};

export const emptyExpiry: CardExpiry = {
  cardExpiryDate: ['', ''],
  cardExpiryDateErrorMode: null,
};

export const filledExpiry: CardExpiry = {
  cardExpiryDate: ['12', '29'],
  cardExpiryDateErrorMode: null,
};

export const emptyCvc: Cvc = {
  cardCvc: '',
  cardCvcErrorMode: null,
};

export const filledCvc: Cvc = {
  cardCvc: '123',
  cardCvcErrorMode: null,
};

export const emptyPassword: CardPassword = {
  cardPassword: '',
  cardPasswordErrorMode: null,
};

export const filledPassword: CardPassword = {
  cardPassword: '12',
  cardPasswordErrorMode: null,
};
