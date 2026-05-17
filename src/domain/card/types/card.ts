import type { CardCompanyId } from '../constant/cardCompanies';

export type CardPreviewInfoType = {
  cardNumbers: string[];
  expiryMonth: string;
  expiryYear: string;
  cardCompanyId: CardCompanyId | null;
};

export type CardFormInfoType = {
  cardNumbers: string[];
  expiryMonth: string;
  expiryYear: string;
  cvcNumber: string;
  cardCompanyId: CardCompanyId | null;
  password: string;
};

export type PostedCard = {
  number: string[];
  expirationDate: string;
  cvc: string;
  issuerCode: CardCompanyId | null;
};

export type Card = {
  id: string;
  number: string[];
  expirationDate: string;
  cvc: string;
  issuerCode: CardCompanyId | null;
};
