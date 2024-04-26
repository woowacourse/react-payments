import { CARD_CONSTRAINTS } from "../constants/setting";

const validators = {
  password(value: string): string {
    if (value && isNaN(Number(value))) {
      return "숫자만 입력 가능합니다.";
    }
    if (value && value.length !== CARD_CONSTRAINTS.PASSWORD.LENGTH) {
      return `숫자 ${CARD_CONSTRAINTS.PASSWORD.LENGTH}자리를 입력해주세요.`;
    }
    return "";
  },

  cvc(value: string): string {
    if (value && isNaN(Number(value))) {
      return "숫자만 입력 가능합니다.";
    }
    if (value && value.length !== CARD_CONSTRAINTS.CVC.LENGTH) {
      return `숫자 ${CARD_CONSTRAINTS.CVC.LENGTH}자리를 입력해주세요.`;
    }
    return "";
  },

  userName(value: string): string {
    if (value && !/^[a-zA-Z\s]+$/.test(value)) {
      return "영어만 입력 가능합니다.";
    }
    return "";
  },

  cardExpiration(value: string, index: number): string {
    if (value && isNaN(Number(value))) {
      return "숫자만 입력 가능합니다.";
    }
    if (value && value.length !== CARD_CONSTRAINTS.CARD_EXPIRATION.LENGTH) {
      return `숫자 ${CARD_CONSTRAINTS.CARD_EXPIRATION.LENGTH}개를 정확히 입력해주세요.`;
    }
    if (value && index === 0 && !(Number(value) >= CARD_CONSTRAINTS.CARD_EXPIRATION.MIN_MONTH && Number(value) <= CARD_CONSTRAINTS.CARD_EXPIRATION.MAX_MONTH)) {
      return `월은 ${CARD_CONSTRAINTS.CARD_EXPIRATION.MIN_MONTH}이상 ${CARD_CONSTRAINTS.CARD_EXPIRATION.MAX_MONTH}이하여야 합니다.`;
    }
    return "";
  },

  cardNumbers(value: string): string {
    if (value && isNaN(Number(value))) {
      return "숫자만 입력 가능합니다.";
    }
    if (value && value.length !== CARD_CONSTRAINTS.CARD_NUMBERS.LENGTH) {
      return `숫자 ${CARD_CONSTRAINTS.CARD_NUMBERS.LENGTH}자리를 입력해주세요.`;
    }
    if (value && Number(value) === 0) {
      return `카드 번호는 0이 될 수 없습니다.`;
    }
    return "";
  },
};

export default validators;
