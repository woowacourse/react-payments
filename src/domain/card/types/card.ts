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
// 요청 저장용
export type StoredCard = {
  number: string;
  expirationDate: string;
  cvc: string;
  issuerCode: string | null;
};

// 요청 응답용
export type CardResponse = {
  id: string;
  issuerCode: string | null;
  number: string;
  expirationDate: string;
};
