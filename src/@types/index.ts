import { CARD_COMPANY } from '../constants/cardCompany';

type Card = {
  id: string;
  cardName: string[];
  cardCompany: CardCompany;
  cardNumbers: string[];
  cardExpirationDate: string[];
  cardOwner: string[];
  cardCVC: string[];
  cardPWD: string[];
};

type CardCompany = (typeof CARD_COMPANY)[number];

export type { Card, CardCompany };
