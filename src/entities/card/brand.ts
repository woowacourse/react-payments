export type Brand = 'default' | 'visa' | 'mastercard';

const BRAND_NUMBER = {
  visa: '4',
  mastercard: ['51', '52', '53', '54', '55'],
  default: '',
};

export const BRAND_CARD_LENGTH = {
  visa: 16,
  mastercard: 16,
  default: 16,
};

export const getBrand = (cardNumberStr: string): Brand => {
  if (cardNumberStr.startsWith(BRAND_NUMBER.visa.toString())) return 'visa';
  if (BRAND_NUMBER.mastercard.some((card) => cardNumberStr.startsWith(card))) return 'mastercard';

  return 'default';
};

export const CARD_BRAND_FORMAT = {
  visa: [4, 4, 4, 4],
  mastercard: [4, 4, 4, 4],
  default: [4, 4, 4, 4],
};
