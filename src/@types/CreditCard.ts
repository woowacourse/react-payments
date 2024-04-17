export type CardNumber = number | null;
export type CreditCardNumber = [CardNumber, CardNumber, CardNumber, CardNumber];

export interface CreditCardProps {
  creditCardNumber: CreditCardNumber;
  expirationPeriod: string;
  ownerName: string;
}
