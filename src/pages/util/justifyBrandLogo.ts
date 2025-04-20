const BRAND_MAP = {
  '0': 'default',
  '4': 'visa',
  '51': 'mastercard',
  '52': 'mastercard',
} as const;

const MASTERCARD_RANGE = { start: 2221, end: 2720 };

export const justifyBrandLogo = (
  cardNumber: number,
): 'visa' | 'mastercard' | 'default' => {
  const cardNumberStr = cardNumber.toString();

  const prefixMatch = Object.keys(BRAND_MAP).find(prefix =>
    cardNumberStr.startsWith(prefix),
  );

  if (prefixMatch) return BRAND_MAP[prefixMatch as keyof typeof BRAND_MAP];

  if (
    cardNumber >= MASTERCARD_RANGE.start &&
    cardNumber <= MASTERCARD_RANGE.end
  ) {
    return 'mastercard';
  }
  return 'default';
};
