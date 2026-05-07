import { CARD_INPUT } from "../Constants";
import { NetworkBrand } from "../NetworkBrand";

export const Validator = {
  isNumber(value: string) {
    if (Number.isNaN(Number(value))) {
      throw new Error("숫자만 입력 가능합니다.");
    }
  },

  isValidNetworkBrand(value: string) {
    const networkBrand = new NetworkBrand(value);
    if (value !== "" && networkBrand.name === undefined) {
      throw new Error("존재하지 않는 네트워크 브랜드 입니다.");
    }
  },

  isValidCardNumberLength(value: string) {
    if (![0, CARD_INPUT.EACH_NUMBER_LENGTH].includes(value.length)) {
      throw new Error("카드 번호 각 항목은 4자리여야 합니다.");
    }
  },

  isValidMonth(value: string) {
    if (value.length === 1 && !["0", "1"].includes(value[0])) {
      throw new Error(
        "유효하지 않은 날짜 형식입니다. 0 이나 1로 시작해야 합니다.",
      );
    }
    if (value.length === 2) {
      const month = Number(value);
      if (month < 1 || month > 12) {
        throw new Error(
          "유효하지 않은 날짜 형식입니다. 1 ~ 12 이내 숫자여야 합니다.",
        );
      }
    }
  },

  isValidYear(value: string) {
    if (value.length !== 2) return;

    const currentYear = new Date().getFullYear();
    const currentTwoDigit = currentYear % 100;

    let offset = Number(value) - currentTwoDigit;
    if (offset < 0) offset += 100;

    if (offset > 5) {
      throw new Error("유효하지 않은 연도입니다.");
    }
  },

  isValidCardExpiryDateLength(value: string) {
    if (![0, CARD_INPUT.EACH_EXPIRY_DATE_LENGTH].includes(value.length)) {
      throw new Error("날짜 각 항목은 2자리여야 합니다.");
    }
  },

  isValidCardCVCLength(value: string) {
    if (![0, CARD_INPUT.CVC_LENGTH].includes(value.length)) {
      throw new Error("CVC는 3자리여야 합니다.");
    }
  },
};
