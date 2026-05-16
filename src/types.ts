import { CARD_ISSUER } from "./constants";

export type CardNetwork = "VISA" | "MasterCard" | "Diners" | "AMEX" | "UnionPay";

export type CardIssuer = keyof typeof CARD_ISSUER;

export type CardNumberSegments = string[]

export type CardExpiryDate = [string, string];

export interface CardFormState {
  cardPassword: string;
  cardValidationCode: string;
  cardExpiryDate: CardExpiryDate
  cardIssuer: CardIssuer | null;
  cardNumberSegments: CardNumberSegments;
};

export interface ValidationRule {
  type: 'onChange' | 'onBlur';
  validator: (input: string) => boolean;
  message: string
}
