const REGEX = {
  NUMBER: '^[0-9]+',
  KOREAN: '^[ㄱ-ㅎ가-힣a-zA-Z]+$',
  ENGLISH: '^[a-zA-Z]+$',
} as const;

export const isNumber = (value: string) => new RegExp(REGEX.NUMBER).test(value);

export const isEnglish = (value: string) => new RegExp(REGEX.ENGLISH).test(value);
