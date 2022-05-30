export interface CardNumber {
  first: string;
  second: string;
  third: string;
  fourth: string;
}

export interface ExpiryDate {
  month: string;
  year: string;
}

export interface Password {
  first: string;
  second: string;
  third: string;
  fourth: string;
}

interface Dictionary {
  [key: string]: any;
}

export interface CardInfo extends Dictionary {
  alias: string;
  theme: string;
  company: string;
  cardNumber: CardNumber;
  expiryDate: ExpiryDate;
  ownerName: string;
  privacyCode: string;
  password: Password;
  id: string;
}
