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

export type Card = {
  id: string;
  cardNumbers: string[];
  expiryMonth: string;
  expiryYear: string;
  cardCompanyId: CardCompanyId | null;
};
