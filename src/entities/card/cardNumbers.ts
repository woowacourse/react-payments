import { BRAND, getBrand, BRAND_RULES, type Brand } from './brand/brand';

export const CARD_NUMBER_ERRORS = {
  TYPE: '숫자만 입력 가능합니다.',
  LENGTH: '카드 번호를 전부 채워주세요.',
  UNKNOWN: '유효하지 않은 카드번호입니다.',
};

export const getBrandByCardNumber = (cardNumbers: string[]): Brand => {
  const stand = cardNumbers[0].length !== 4 ? cardNumbers[0] : cardNumbers[0] + cardNumbers[1];
  return getBrand(stand);
};

export const getCardNumberError = (cardNumber: string, length: number): string | undefined => {
  return cardNumber.length !== length ? CARD_NUMBER_ERRORS.LENGTH : undefined;
};

export const getCardError = (fullCardNumber: string): string | undefined => {
  const brand = getBrand(fullCardNumber);
  if (brand === BRAND.UNKNOWN) return CARD_NUMBER_ERRORS.UNKNOWN;
  if (fullCardNumber.length !== BRAND_RULES[brand].length) return CARD_NUMBER_ERRORS.UNKNOWN;
  return undefined;
};

export const getTotalErrorMessage = (
  cardNumbers: string[],
  touched: boolean[],
  errors: (string | undefined)[],
): string | undefined => {
  const hasEmptyTouched = touched.some((touch, idx) => touch && cardNumbers[idx] === '');
  const isBrandIdentifiable = touched[0] && touched[1];
  const isUnknownBrand = getBrandByCardNumber(cardNumbers) === BRAND.UNKNOWN;
  const isTotalTouched = touched.every(Boolean);

  if (hasEmptyTouched) return CARD_NUMBER_ERRORS.LENGTH;
  if (isBrandIdentifiable && isUnknownBrand) return CARD_NUMBER_ERRORS.UNKNOWN;
  if (isTotalTouched) return errors.find(Boolean) ?? getCardError(cardNumbers.join(''));
  return undefined;
};

export const getFieldErrors = (
  cardNumbers: string[],
  touched: boolean[],
  errors: (string | undefined)[],
  brand: Brand,
): boolean[] => {
  const hasEmptyTouched = touched.some((touch, idx) => touch && cardNumbers[idx] === '');
  const isBrandIdentifiable = touched[0] && touched[1];
  const isUnknownBrand = brand === BRAND.UNKNOWN;
  const isAllError = hasEmptyTouched || (isBrandIdentifiable && isUnknownBrand);

  if (isAllError) return touched;
  return errors.map((error, idx) => touched[idx] && error !== undefined);
};
