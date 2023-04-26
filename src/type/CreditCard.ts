import { CardCompany } from "./CardCompany";

export interface CreditCard {
  name: string;
  date: string;
  company?: CardCompany;
  number: string[];
  securityCode: number;
  password: number;
};

export const getDefaultCreditCard = (): CreditCard => ({
  name: '',
  date: '',
  number: ['', '', '', ''],
  securityCode: 0,
  password: 0,
  company: 'woori',
});
