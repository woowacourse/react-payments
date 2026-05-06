import type { CARD_ISSUERS } from "./constants";

export type CardNetwork = "VISA" | "MasterCard" | null;

export type CardIssuer = typeof CARD_ISSUERS[number] | null;

export type CardNumberSegments = [string, string, string, string]

export type CardExpiryDate = [string, string];

export interface CardFormState {
  cardPassword: string;
  cardValidationCode: string;
  cardExpiryDate: CardExpiryDate
  cardIssuer: CardIssuer;
  cardNumberSegments: CardNumberSegments;
};

export interface ValidationRule {
  type: 'onChange' | 'onBlur' | 'isComplete';
  validator: (input: string) => boolean;
  message?: string
}
