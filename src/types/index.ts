import { CARD_COMPANY_COLOR_MAP } from '../constants';

export interface CardType {
  id: number;
  cardCompany: keyof typeof CARD_COMPANY_COLOR_MAP | '';
  cardNumber: string[];
  expireDate: string[];
  ownerName: string;
  securityCode: string;
  cardPassword: string[];
  cardName: string;
}

export enum Page {
  list = 'list',
  register = 'register',
  name = 'name',
}
