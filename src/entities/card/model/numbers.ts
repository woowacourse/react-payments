import { BRAND, getBrand, BRAND_RULES, type Brand } from './brand';

export const CARD_NUMBER_ERRORS = {
  TYPE: '숫자만 입력 가능합니다.',
  LENGTH: '카드 번호를 전부 채워주세요.',
  UNKNOWN: '유효하지 않은 카드번호입니다.',
};

export const getBrandByNumber = (numbers: string[]): Brand => {
  const stand = numbers[0].length !== 4 ? numbers[0] : numbers[0] + numbers[1];
  return getBrand(stand);
};

export const getNumberError = (numbers: string, length: number): string | undefined => {
  return numbers.length !== length ? CARD_NUMBER_ERRORS.LENGTH : undefined;
};

export const getNumbersError = (fullNumbers: string): string | undefined => {
  const brand = getBrand(fullNumbers);
  if (brand === BRAND.UNKNOWN) return CARD_NUMBER_ERRORS.UNKNOWN;
  if (fullNumbers.length !== BRAND_RULES[brand].length) return CARD_NUMBER_ERRORS.UNKNOWN;
  return undefined;
};

export const getTotalErrorMessage = (
  numbers: string[],
  fieldErrors: boolean[],
  brand: string,
): string | undefined => {
  // 나중에고치장
  const checkFill = (numbers[0] + numbers[1]).length === 8;
  const hasError = fieldErrors.some((e) => e !== false);
  if (hasError) {
    return CARD_NUMBER_ERRORS.LENGTH;
  }

  if (checkFill && brand === BRAND.UNKNOWN) {
    return CARD_NUMBER_ERRORS.UNKNOWN;
  }
};
