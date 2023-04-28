import { COMPANIES } from '../constants/cardCompany';

export interface CardViewerProps {
  cardNumber: string[];
  expirationDate: {
    month: string;
    year: string;
  };
  ownerName: string;
  companyId?: keyof typeof COMPANIES;
}

export interface Card extends CardViewerProps {
  securityCode: string;
  password: string[];
  nickName?: string;
}
