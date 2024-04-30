import { INPUT_RULES } from "../constants/card-app";

const cardInputValidator = {
  validateNumericInput(value: string) {
    return /^(\d*)$/.test(value);
  },

  validateAlphabetInput(value: string) {
    return /^[a-zA-Z ]*$/.test(value);
  },

  validateNumberInRange(number: number, min: number, max: number) {
    return number >= min && number <= max;
  },

  validateCardNumberLength(value: string) {
    return value.length === INPUT_RULES.maxCardNumberPartLength;
  },

  validatePastYear(year: string) {
    const currentYear = new Date().getFullYear() & 100;

    return parseInt(year, 10) <= currentYear;
  },

  validateMonth(month: string) {
    if (month.length !== INPUT_RULES.validExpirationLength) return false;

    return this.validateNumberInRange(parseInt(month, 10), 1, 12);
  },

  validateYear(year: string) {
    if (year.length !== INPUT_RULES.validExpirationLength) return false;

    return this.validatePastYear(year);
  },

  validateFutureDate(month: number, year: number) {
    const currentTime = new Date().getTime();

    const enteredDate = new Date(2000 + year, month, 0).getTime();

    return enteredDate > currentTime;
  },

  validateExpiration(expiration: { mm: string; yy: string; name: string }) {
    const { mm, yy, name } = expiration;

    if (name === "mm" && !this.validateMonth(mm)) return false;

    if (name === "yy" && !this.validateYear(yy)) return false;

    if (
      mm.length !== INPUT_RULES.validExpirationLength ||
      yy.length !== INPUT_RULES.validExpirationLength
    )
      return true;

    return this.validateFutureDate(parseInt(mm), parseInt(yy)) ? true : false;
  },
};

export default cardInputValidator;
