import type { CARD_ISSUERS } from "./constants";

export type CardNetwork = "VISA" | "MasterCard" | "Diners" | "AMEX" | "UnionPay";

export type CardIssuer = typeof CARD_ISSUERS[number]["value"];

export type CardNumberSegments = [string, string, string, string]

export type CardExpiryDate = [string, string];

export interface CardFormState {
  cardPassword: string;
  cardValidationCode: string;
  cardExpiryDate: CardExpiryDate
  cardIssuer: CardIssuer | null;
  cardNumberSegments: CardNumberSegments;
};

export interface AddCardResultState {
  type: 'success' | 'error';
  issuer: CardIssuer | null;
  firstSegment: string;
}

export interface ValidationRule {
  type: 'onChange' | 'onBlur';
  validator: (input: string) => boolean;
  message?: string
}
