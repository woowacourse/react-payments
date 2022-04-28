interface CardInfo {
  cardNumbers: CardNumbers;
  expiredDate: ExpiredDate;
  userName: string;
  securityCode: string;
  password: Password;
}

type CardNumbers = [string, string, string, string];

type Password = [string, string];

interface ExpiredDate {
  month: string;
  year: string;
}

export type { CardInfo, CardNumbers, ExpiredDate, Password };
