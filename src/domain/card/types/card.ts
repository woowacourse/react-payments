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

// POST 카드 요청 타입
export type PostedCard = {
  number: string;
  expirationDate: string;
  cvc: string;
  issuerCode: string | null;
};

// GET 카드 반환 타입
export type Card = {
  id: string;
  issuerCode: string | null;
  number: string;
  expirationDate: string;
};
