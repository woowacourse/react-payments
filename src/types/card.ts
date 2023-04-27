import type { CompanyName } from '../constants/company';

export interface CardInfo {
  company?: CompanyName;
  cardNumber1: string;
  cardNumber2: string;
  cardNumber3?: string;
  cardNumber4?: string;
  expiredMonth: string;
  expiredYear: string;
  owner?: string;
}
