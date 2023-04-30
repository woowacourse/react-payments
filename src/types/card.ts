import type { CompanyName } from '../constants/company';
interface CardNumber {
  first: string;
  second: string;
  third: string;
  fourth: string;
}

interface ExpiredDate {
  month: string;
  year: string;
}

interface CardPassword {
  first: string;
  second: string;
}
export interface CardInfo {
  company?: CompanyName;
  number: CardNumber;
  expiredDate: ExpiredDate;
  owner: string;
  cvc: string;
  password: CardPassword;
}

export interface CardData {
  name: string;
  company: CompanyName;
  number: Pick<CardNumber, 'first' | 'second'>;
  expiredDate: ExpiredDate;
  owner?: string;
}
