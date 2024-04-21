import { CARD_CONSTRAINTS } from "../constants/setting";

export const validateCardNumber = (value: string): string => {
  if (value !== "" && isNaN(Number(value))) {
    return "숫자만 입력 가능합니다.";
  }
  if (value !== "" && value.length !== CARD_CONSTRAINTS.CARD_NUMBERS.LENGTH) {
    return `숫자 ${CARD_CONSTRAINTS.CARD_NUMBERS.LENGTH}자리를 입력해주세요.`;
  }
  return "";
};

export const validateCardExpiration = (value: string, index: number): string => {
  if (value !== "" && isNaN(Number(value))) {
    return "숫자만 입력 가능합니다.";
  }
  if (value !== "" && value.length !== CARD_CONSTRAINTS.CARD_EXPIRATION.LENGTH) {
    return `숫자 ${CARD_CONSTRAINTS.CARD_EXPIRATION.LENGTH}개를 정확히 입력해주세요.`;
  }
  if (value !== "" && index === 0 && !(Number(value) >= CARD_CONSTRAINTS.CARD_EXPIRATION.MIN_MONTH && Number(value) <= CARD_CONSTRAINTS.CARD_EXPIRATION.MAX_MONTH)) {
    return `월은 ${CARD_CONSTRAINTS.CARD_EXPIRATION.MIN_MONTH}이상 ${CARD_CONSTRAINTS.CARD_EXPIRATION.MAX_MONTH}이하여야 합니다.`;
  }
  return "";
};

export const validateUserName = (value: string): string => {
  if (value !== "" && !/^[a-zA-Z\s]+$/.test(value)) {
    return "영어만 입력 가능합니다.";
  }
  return "";
};
