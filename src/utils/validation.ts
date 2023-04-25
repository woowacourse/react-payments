const REGEX = {
  NUMBER: '^[0-9]+',
  KOREAN: '^[ㄱ-ㅎ가-힣a-zA-Z]+$',
} as const;

export const isNumber = (value: string) => new RegExp(REGEX.NUMBER).test(value);
