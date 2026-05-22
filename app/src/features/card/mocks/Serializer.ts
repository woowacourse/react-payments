import { Validator } from "../validators/CardValidator";

export const CardSerializer = {
  validate(data: { number: string; expirationDate: string; cvc: string }) {
    const errors = {
      number: this.validateNumber(data.number),
      cvc: this.validateCVC(data.cvc),
      expirationDate: this.validateExpirationDate(data.expirationDate),
    };
    return {
      isValid: Object.values(errors).every((e) => !e),
      errors,
    };
  },

  validateNumber(value: string) {
    try {
      Validator.isValidNetworkBrand(value);
    } catch {
      return {
        code: "INVALID_CARD_NUMBER",
        message: "유효하지 않은 카드 번호입니다.",
      };
    }
  },

  validateCVC(value: string) {
    if (value === "000")
      return { code: "INVALID_CVC", message: "유효하지 않은 CVC입니다." };
  },

  validateExpirationDate(value: string) {
    const format = /^\d{2}\/\d{2}$/;
    const month = Number(value.split("/")[0]);
    if (!format.test(value) && (month < 1 || month > 12)) {
      return {
        code: "INVALID_EXPIRATION_DATE",
        message: "유효하지 않은 만료일입니다.",
      };
    }
  },
};
