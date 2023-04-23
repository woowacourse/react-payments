import { CARD_ISSUERS } from '../constants';

interface SupportingTextMessage {
  default?: string;
  error?: string;
}

type Issuer = (typeof CARD_ISSUERS)[number];

interface ExpirationDate {
  month: string;
  year: string;
}

interface Card {
  id: string;
  cardName: string;
  issuer: Issuer | '';
  cardNumber: string;
  expirationDate: ExpirationDate;
  ownerName?: string;
  securityCode: string;
  password: string[];
}

type CardFormData = Omit<Card, 'id' | 'cardName'>;

type CardDisplayInformation = Pick<Card, 'issuer' | 'cardNumber' | 'expirationDate' | 'ownerName'>;

type CardInputValidation = {
  [K in keyof CardFormData]: boolean;
};

type MultipleInputFieldCardInformation = 'password';

export type {
  SupportingTextMessage,
  Issuer,
  ExpirationDate,
  Card,
  CardFormData,
  CardDisplayInformation,
  CardInputValidation,
  MultipleInputFieldCardInformation,
};
