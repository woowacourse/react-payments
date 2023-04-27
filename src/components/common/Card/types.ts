export type ExpirationDate = {
  year: string;
  month: string;
};

export type Password = {
  first: string;
  second: string;
};

export type COMPANY_NAME =
  | 'BC카드'
  | '하나카드'
  | '현대카드'
  | '카카오뱅크'
  | '국민카드'
  | '롯데카드'
  | '신한카드'
  | '우리카드';

export type Card = {
  bank: COMPANY_NAME;
  numbers: string[];
  expirationDate: ExpirationDate;
  ownerName: string;
  securityCode: string;
  password: Password;
};
