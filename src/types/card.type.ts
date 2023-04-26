import { BANK_LIST } from '../constants/bankList';

export interface CardNumber {
  first: string;
  second: string;
  third: string;
  fourth: string;
}

export interface ExpirationDate {
  month: string;
  year: string;
}

export type HolderName = string;

export type CVC = string;

export interface Password {
  passwordFirstDigit: string;
  passwordSecondDigit: string;
}

export type BankNames = typeof BANK_LIST[number]['name'];

export interface CardRegisterInfo {
  cardNumber: CardNumber;
  expirationDate: ExpirationDate;
  holderName: HolderName;
  cvc: CVC;
  password: Password;
  bankName: BankNames;
}
