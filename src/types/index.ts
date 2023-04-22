interface ExpirationDateFormat {
  month: string;
  year: string;
}

interface Card {
  cardNumber: '';
  expirationDate: ExpirationDateFormat;
  ownerName?: string;
  securityCode: string;
  password: string[];
}

type CardInputValidation = {
  [K in keyof Card]: boolean;
};

type MultipleInputFieldCardInformation = 'password';

export type { ExpirationDateFormat, Card, CardInputValidation, MultipleInputFieldCardInformation };
