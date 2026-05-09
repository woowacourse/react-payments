export type CardBrand = "VISA" | "MasterCard";

export type CardNumberSegments = [string, string, string, string];

export interface CardFormState {
  cardNumberSegments: CardNumberSegments;
  expiryMonth: string;
  expiryYear: string;
  cvc: string;
}
