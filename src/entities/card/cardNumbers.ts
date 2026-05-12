import { BRAND, getBrand, RULES } from './brand';

export const CARD_NUMBER_ERRORS = {
  TYPE: '숫자만 입력 가능합니다.',
  LENGTH: '카드 번호를 전부 채워주세요.',
  UNKNOWN: '유효하지 않은 카드번호입니다.',
};

export const validateFullCardNumber = (fullCardNumber: string): string | undefined => {
  const brand = getBrand(fullCardNumber);
  if (brand === BRAND.UNKNOWN) return CARD_NUMBER_ERRORS.UNKNOWN;
  if (fullCardNumber.length !== RULES[brand].length) return CARD_NUMBER_ERRORS.UNKNOWN;
  return undefined;
};

export const validateCardNumber = (cardNumber: string, length: number): string | undefined => {
  return cardNumber.length !== length ? CARD_NUMBER_ERRORS.LENGTH : undefined;
};
