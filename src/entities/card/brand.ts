export const BRAND = {
  VISA: 'visa',
  MASTERCARD: 'mastercard',
  DINERS: 'diners',
  AMEX: 'amex',
  UNIONPAY: 'unionpay',
  DEFAULT: 'default',
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

export const RULES: Record<Brand, BrandConfig> = {
  visa: {
    format: [4, 4, 4, 4],
    length: 16,
    isMatch: [(str) => str.startsWith('4')],
  },
  mastercard: {
    format: [4, 4, 4, 4],
    length: 16,
    isMatch: [(str) => isInRange(str.slice(0, 2), 51, 55)],
  },
  diners: {
    format: [4, 6, 4],
    length: 14,
    isMatch: [(str) => str.startsWith('36')],
  },
  amex: {
    format: [4, 6, 5],
    length: 15,
    isMatch: [(str) => str.startsWith('34'), (str) => str.startsWith('37')],
  },
  unionpay: {
    format: [4, 4, 4, 4],
    length: 16,
    isMatch: [
      (str) => isInRange(str.slice(0, 6), 622126, 622925),
      (str) => isInRange(str.slice(0, 3), 624, 626),
      (str) => isInRange(str.slice(0, 4), 6282, 6288),
    ],
  },
  default: {
    format: [4, 4, 4, 4],
    length: 16,
    isMatch: [],
  },
};

export const getBrand = (cardNumber: string): Brand => {
  const rulesEntries = Object.entries(RULES) as [Brand, BrandConfig][];

  for (const [brand, config] of rulesEntries) {
    if (config.isMatch.some((match) => match(cardNumber))) {
      return brand;
    }
  }

  return BRAND.DEFAULT;
};
