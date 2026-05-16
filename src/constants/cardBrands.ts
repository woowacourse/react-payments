export type PrefixRange = {
  length: number;
  min: number;
  max: number;
};

export const DEFAULT_CARD_NUMBER_FORMAT = [4, 4, 4, 4] as const;
export const DEFAULT_CARD_NUMBER_TOTAL_LENGTH = 16;

export const CARD_BRANDS = {
  Visa: {
    format: DEFAULT_CARD_NUMBER_FORMAT,
    totalLength: DEFAULT_CARD_NUMBER_TOTAL_LENGTH,
    prefixes: ["4"],
  },
  MasterCard: {
    format: DEFAULT_CARD_NUMBER_FORMAT,
    totalLength: DEFAULT_CARD_NUMBER_TOTAL_LENGTH,
    prefixRanges: [{ length: 2, min: 51, max: 55 }],
  },
  AMEX: {
    format: [4, 6, 5],
    totalLength: 15,
    prefixes: ["34", "37"],
  },
  Diners: {
    format: [4, 6, 4],
    totalLength: 14,
    prefixes: ["36"],
  },
  UnionPay: {
    format: DEFAULT_CARD_NUMBER_FORMAT,
    totalLength: DEFAULT_CARD_NUMBER_TOTAL_LENGTH,
    prefixRanges: [
      { length: 6, min: 622126, max: 622925 },
      { length: 3, min: 624, max: 626 },
      { length: 4, min: 6282, max: 6288 },
    ],
  },
} as const;

export type CardBrand = keyof typeof CARD_BRANDS;
