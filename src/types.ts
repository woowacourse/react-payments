export type CardBrand = "VISA" | "MasterCard" | "Diners" | "AMEX" | "UnionPay";

export interface CardBrandConfig {
  segmentLengths: number[];
}

export const CARD_BRAND_CONFIGS: Record<CardBrand, CardBrandConfig> = {
  VISA: { segmentLengths: [4, 4, 4, 4] },
  MasterCard: { segmentLengths: [4, 4, 4, 4] },
  Diners: { segmentLengths: [4, 6, 4] },
  AMEX: { segmentLengths: [4, 6, 5] },
  UnionPay: { segmentLengths: [4, 4, 4, 4] },
};

export const DEFAULT_SEGMENT_LENGTHS = [4, 4, 4, 4];

export type CardNumberSegments = string[];

export interface CardFormState {
  cardNumberSegments: CardNumberSegments;
  expiryMonth: string;
  expiryYear: string;
  cvc: string;
  cardCompany: string;
  cardPassword: string;
}
