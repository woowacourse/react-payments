export type PrefixRange = {
  length: number;
  min: number;
  max: number;
};

export const CARD_BRANDS = {
  Visa: {
    format: [4, 4, 4, 4],
    totalLength: 16,
    prefixes: ["4"],
  },
  MasterCard: {
    format: [4, 4, 4, 4],
    totalLength: 16,
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
    format: [4, 4, 4, 4],
    totalLength: 16,
    prefixRanges: [
      { length: 6, min: 622126, max: 622925 },
      { length: 3, min: 624, max: 626 },
      { length: 4, min: 6282, max: 6288 },
    ],
  },
} as const;

export type CardBrand = keyof typeof CARD_BRANDS;
