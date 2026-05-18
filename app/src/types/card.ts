import type { CardCompany } from '../context/CardContext';
import type { CardExpiryDateType } from './cardExpiryDate';

export type Card = {
  id: string;
  cardCompany: CardCompany;
  cardNumber: string[];
  cardExpiryDate: CardExpiryDateType;
  cardCVC: string;
  cardPassword: string;
};
