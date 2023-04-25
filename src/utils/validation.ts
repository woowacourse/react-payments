export const REGEX = {
  NUMBER: '^[0-9]+',
  KOREAN: '^[ㄱ-ㅎ가-힣a-zA-Z]+$',
  ENGLISH: '^[a-zA-Z]+$',
  THREE_DIGIT: '^[0-9]{3}$',
  FOUR_DIGIT: '^[0-9]{4}$',
  MONTH: '^(0[1-9]|1[0-2])$',
  YEAR: '^(2[3-9]|[3-3][0-9]|40)$',
} as const;

export const isNumber = (value: string) => new RegExp(REGEX.NUMBER).test(value);

export const isEnglish = (value: string) => new RegExp(REGEX.ENGLISH).test(value);
