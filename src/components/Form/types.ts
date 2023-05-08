import { BankCode } from 'components/common/Card/types';

export type CardForm = {
  cardNumbers: string[];
  month: string;
  year: string;
  name: string;
  firstDigit: string;
  secondDigit: string;
  securityCode: string;
  bankCode: BankCode;
  nickName?: string;
};
