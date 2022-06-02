interface StringAnyDictionary {
  [key: string]: any;
}

export interface CardNumber extends StringAnyDictionary {
  first: string;
  second: string;
  third: string;
  fourth: string;
}

export interface ExpiryDate extends StringAnyDictionary {
  month: string;
  year: string;
}

export interface Password extends StringAnyDictionary {
  first: string;
  second: string;
  third: string;
  fourth: string;
}

export interface CardInfo extends StringAnyDictionary {
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

export type CardInfoKey =
  | 'alias'
  | 'theme'
  | 'company'
  | 'cardNumber'
  | 'expiryDate'
  | 'ownerName'
  | 'privacyCode'
  | 'password'
  | 'id';
