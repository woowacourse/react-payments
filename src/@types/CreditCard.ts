export type CardNumber = string | null;
export type CreditCardNumber = [CardNumber, CardNumber, CardNumber, CardNumber];

export interface CreditCardProps {
  creditCardNumber: CreditCardNumber;
  expirationPeriod: string;
  ownerName: string;
}

export interface CardNumberValue {
  firstValue: string;
  secondValue: string;
  thirdValue: string;
  fourthValue: string;
}

export interface ExpirationPeriodValue {
  month: string;
  year: string;
}
