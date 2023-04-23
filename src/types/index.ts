interface SupportingTextMessage {
  default?: string;
  error?: string;
}

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
  ExpirationDate,
  Card,
  CardInputValidation,
  CardInformation,
  MultipleInputFieldCardInformation,
};
