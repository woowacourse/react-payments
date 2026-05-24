import type { SelectedCardIssuerCode } from '../constants/cardIssuer';

export interface CardFormTypes {
  cardNumber: string;
  cardIssuer: SelectedCardIssuerCode;
  cardExpirationDate: {
    month: string;
    year: string;
  };
  cardCvc: string;
  cardPassword: string;
}

export interface CardResponse {
  id: string;
  issuerCode: string;
  number: string;
  expirationDate: string;
}

export type GetCardListResponse = CardResponse[];

export interface CreateCardRequest {
  number: string;
  expirationDate: string;
  cvc: string;
  issuerCode: string;
}

export interface CreateCardResponse {
  id: string;
}
