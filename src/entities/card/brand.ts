export type Brand = 'default' | 'visa' | 'mastercard';

const BRAND_FORMAT = {
  visa: '4',
  mastercard: ['51', '52', '53', '54', '55'],
  default: '',
};

export const BRAND_CARD_LENGTH = {
  visa: 16,
  mastercard: 16,
  default: -1,
};

export const getBrand = (cardNumber: string): Brand => {
  if (cardNumber.startsWith(BRAND_FORMAT.visa.toString())) return 'visa';
  if (BRAND_FORMAT.mastercard.some((brandNumber) => cardNumber.startsWith(brandNumber))) return 'mastercard';

  return 'default';
};
