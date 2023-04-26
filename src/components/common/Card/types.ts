export type ExpirationDate = {
  year: string;
  month: string;
};

export type Password = {
  first: string;
  second: string;
};

export type Card = {
  bank: string;
  numbers: string[];
  expirationDate: ExpirationDate;
  name: string;
  securityCode: string;
  password: Password;
};
