const NUMERIC_REGEX = /^\d+$/;

export const validateNumeric = (value: string): string => {
  if (!value) return "";
  if (!NUMERIC_REGEX.test(value)) return "숫자만 입력 가능합니다";
  return "";
};
