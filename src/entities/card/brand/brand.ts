export const BRAND = {
  VISA: 'VISA',
  MASTERCARD: 'MASTERCARD',
  DINERS: 'DINERS',
  AMEX: 'AMEX',
  UNIONPAY: 'UNIONPAY',
  UNKNOWN: 'UNKNOWN',
} as const;

export type Brand = (typeof BRAND)[keyof typeof BRAND];

type MatchCondition = (str: string) => boolean;

interface BrandConfig {
  format: number[];
  length: number;
  isMatch: MatchCondition[];
}

const isInRange = (str: string, min: number, max: number): boolean => {
  return Number(str) >= min && Number(str) <= max;
};

export const BRAND_RULES: Record<Brand, BrandConfig> = {
  VISA: {
    format: [4, 4, 4, 4],
    length: 16,
    isMatch: [(str) => str.startsWith('4')],
  },
  MASTERCARD: {
    format: [4, 4, 4, 4],
    length: 16,
    isMatch: [(str) => isInRange(str.slice(0, 2), 51, 55)],
  },
  DINERS: {
    format: [4, 4, 4, 2],
    length: 14,
    isMatch: [(str) => str.startsWith('36')],
  },
  AMEX: {
    format: [4, 4, 4, 3],
    length: 15,
    isMatch: [(str) => str.startsWith('34'), (str) => str.startsWith('37')],
  },
  UNIONPAY: {
    format: [4, 4, 4, 4],
    length: 16,
    isMatch: [
      (str) => isInRange(str.slice(0, 6), 622126, 622925),
      (str) => isInRange(str.slice(0, 3), 624, 626),
      (str) => isInRange(str.slice(0, 4), 6282, 6288),
    ],
  },
  UNKNOWN: {
    format: [4, 4, 4, 4],
    length: 16,
    isMatch: [],
  },
};

export const getBrand = (cardNumber: string): Brand => {
  const rulesEntries = Object.entries(BRAND_RULES) as [Brand, BrandConfig][];

  for (const [brand, config] of rulesEntries) {
    if (config.isMatch.some((match) => match(cardNumber))) {
      return brand;
    }
  }
  return BRAND.UNKNOWN;
};
