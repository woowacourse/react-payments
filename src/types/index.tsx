export type CreditCard = {
  number: string;
  expiry: string;
  owner?: string;
  cvc: string;
  password: {
    first: string;
    second: string;
  };
};
