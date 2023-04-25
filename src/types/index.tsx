export type CreditCardPasswordTypeKeys = keyof CreditCardPasswordType;

export type CreditCardPasswordType = {
  first: string,
  second: string
};

export type CreditCard = {
  number: string;
  expiry: string;
  owner?: string;
  cvc: string;
  password: CreditCardPasswordType;
};
