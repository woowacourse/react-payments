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
  cardNumber: string;
  expirationDate: ExpirationDate;
  ownerName?: string;
  securityCode: string;
  password: string[];
}

type CardInputValidation = {
  [K in keyof Card]: boolean;
};

type CardInformation = Pick<Card, 'cardNumber' | 'expirationDate' | 'ownerName'>;

type MultipleInputFieldCardInformation = 'password';

export type {
  SupportingTextMessage,
  Issuer,
  ExpirationDate,
  Card,
  CardInputValidation,
  CardInformation,
  MultipleInputFieldCardInformation,
};
