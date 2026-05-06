export type CardBrand = "VISA" | "MasterCard" | null;

export type CardNumberSegments = [string, string, string, string]

export interface CardFormState {
  cardNumberSegments: CardNumberSegments;
  expiryMonth: string;
  expiryYear: string;
  cvc: string;
};

export interface ValidationRule {
  type: 'onChange' | 'onBlur';
  validator: (input: string) => boolean;
  message: string;
};
