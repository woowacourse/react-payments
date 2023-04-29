import type { CreditCardVendor } from './CreditCardVendor';

export type CreditCard = {
  id: number;
  owner: string;
  displayName: string;
  vendor: CreditCardVendor;
  cardNumbers: string;
  expirationDate: [string, string];
  cvc: string;
  password: string;
};
