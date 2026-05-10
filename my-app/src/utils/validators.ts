const NUMERIC_REGEX = /^\d+$/;
const VALID_MONTH_REGEX = /^(0[1-9]|1[0-2])$/;

export const validateNumeric = (value: string): string => {
  if (!value) return "";
  if (!NUMERIC_REGEX.test(value)) return "숫자만 입력 가능합니다";
  return "";
};

export const validateCardNumbers = (
  values: string[],
  isSupportedNetwork: boolean,
): { index: number; message: string } => {
  for (const [i, value] of values.entries()) {
    if (!value) continue;
    if (!NUMERIC_REGEX.test(value)) {
      return { index: i, message: "숫자만 입력 가능합니다" };
    }
    if (i === 0 && !isSupportedNetwork) {
      return { index: i, message: "이 카드 브랜드는 지원하지 않습니다." };
    }
  }
  return { index: -1, message: "" };
};

export const validateExpiry = (values: string[]): { index: number; message: string } => {
  for (const [i, value] of values.entries()) {
    if (!value) continue;
    if (!NUMERIC_REGEX.test(value)) {
      return { index: i, message: "숫자만 입력 가능합니다" };
    }
    if (i === 0 && !VALID_MONTH_REGEX.test(value)) {
      return { index: i, message: "유효한 날짜를 입력해주세요" };
    }
  }
  return { index: -1, message: "" };
};
