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

export const ISSUER_CODE_MAP: Record<string, string> = {
  BC카드: "31",
  신한카드: "41",
  카카오뱅크: "15",
  현대카드: "61",
  우리카드: "W1",
  롯데카드: "71",
  하나카드: "21",
  국민카드: "11",
};

export interface CardFormState {
  cardNumberSegments: CardNumberSegments;
  expiryMonth: string;
  expiryYear: string;
  cvc: string;
  cardCompany: string;
  cardPassword: string;
}
