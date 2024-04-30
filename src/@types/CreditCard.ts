import { CardType } from "../constants/cardType";

export type CardNumber = string | null;
export type CreditCardNumber = [CardNumber, CardNumber, CardNumber, CardNumber];

export interface CreditCardProps {
  creditCardNumber: CreditCardNumber;
  expirationPeriod: string;
  ownerName: string;
  selectedCard?: CardType;
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

export interface OwnerValue {
  name: string;
}

export interface InfoValue {
  cvc: string;
}

export interface AuthenticationValue {
  password: string;
}

export type CreditCardSpecificValue =
  | CardNumberValue
  | ExpirationPeriodValue
  | OwnerValue
  | InfoValue
  | AuthenticationValue;

export interface CreditCardAllValues
  extends CardNumberValue,
    ExpirationPeriodValue,
    OwnerValue,
    InfoValue,
    AuthenticationValue {}
