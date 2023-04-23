type CardNumber = [string, string, string, string];
type ExpirationDate = [string, string];
type CardPassword = [string, string];

interface Card {
  cardNumber: CardNumber;
  expirationDate: ExpirationDate;
  owner?: string;
  securityCode: string;
  password: CardPassword;
}

export type { CardNumber, CardPassword, ExpirationDate, Card };
