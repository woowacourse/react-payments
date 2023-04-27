import type { CreditCardVendorName } from './CreditCardVendor';

export type CreditCard = {
  owner: string;
  displayName: string;
  vendor: CreditCardVendorName;
  cardNumbers: string;
  expirationDate: [string, string];
  cvc: string;
  password: string;
};
