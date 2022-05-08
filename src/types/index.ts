interface CardInfo {
  cardName: string;
  cardType: string;
  cardNumbers: CardNumbers;
  expiredDate: ExpiredDate;
  userName: string;
  securityCode: string;
  password: Password;
  id: number | null;
}

type CardNumbers = [string, string, string, string];

type Password = [string, string];

interface ExpiredDate {
  month: string;
  year: string;
}

export type { CardInfo, CardNumbers, ExpiredDate, Password };
