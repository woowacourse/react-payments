interface SupportingTextMessage {
  default?: string;
  error?: string;
}

interface ExpirationDateFormat {
  month: string;
  year: string;
}

interface Card {
  cardNumber: string;
  expirationDate: ExpirationDateFormat;
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
  ExpirationDateFormat,
  Card,
  CardInputValidation,
  CardInformation,
  MultipleInputFieldCardInformation,
};
