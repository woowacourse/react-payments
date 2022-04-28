interface CardInfo {
  cardNumbers: CardNumbers;
  expirationDate: ExpirationDate;
  userName: string;
  securityCode: string;
  password: Password;
}

type CardNumbers = [string, string, string, string];

type Password = [string, string];

interface ExpirationDate {
  month: string;
  year: string;
}

export type { CardInfo, CardNumbers, ExpirationDate, Password };
