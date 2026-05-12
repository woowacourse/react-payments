import type { CardCompanyId } from './CardPreview';

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
