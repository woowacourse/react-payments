export const CARD_BRAND = {
  VISA: 'VISA',
  MASTERCARD: 'MASTERCARD',
  DINERS: 'DINERS',
  AMEX: 'AMEX',
  UNIONPAY: 'UNIONPAY',
} as const;

export type CardBrand = (typeof CARD_BRAND)[keyof typeof CARD_BRAND];

type MatchCondition = (str: string) => boolean;

interface BrandConfig {
  length: number;
  isMatch: MatchCondition[];
}

const isInRange = (str: string, min: number, max: number): boolean => {
  return Number(str) >= min && Number(str) <= max;
};

export const BRAND_RULES: Record<CardBrand, BrandConfig> = {
  VISA: {
    length: 16,
    isMatch: [(str) => str.startsWith('4')],
  },
  MASTERCARD: {
    length: 16,
    isMatch: [(str) => isInRange(str.slice(0, 2), 51, 55)],
  },
  DINERS: {
    length: 14,
    isMatch: [(str) => str.startsWith('36')],
  },
  AMEX: {
    length: 15,
    isMatch: [(str) => str.startsWith('34'), (str) => str.startsWith('37')],
  },
  UNIONPAY: {
    length: 16,
    isMatch: [
      (str) => isInRange(str.slice(0, 6), 622126, 622925),
      (str) => isInRange(str.slice(0, 3), 624, 626),
      (str) => isInRange(str.slice(0, 4), 6282, 6288),
    ],
  },
};

export const getCardBrand = (cardNumber: string): CardBrand | undefined => {
  const rulesEntries = Object.entries(BRAND_RULES) as [CardBrand, BrandConfig][];

  for (const [brand, config] of rulesEntries) {
    if (config.isMatch.some((match) => match(cardNumber))) {
      return brand;
    }
  }
  return;
};

export const validateCardNumber = (cardNumber: string): boolean => {
  const brand = getCardBrand(cardNumber);
  if (brand === undefined) return false;

  return cardNumber.length === BRAND_RULES[brand].length;
};
