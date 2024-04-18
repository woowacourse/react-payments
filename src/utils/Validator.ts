const ValidatorCondition = {
  checkMaxDigit(value: string, digit: number) {
    return value.length > digit;
  },

  checkIsDigit(value: string) {
    return /^\d* ?\d*$/.test(value);
  },

  checkIsEnglish(value: string) {
    return /^[a-zA-Z\s]*$/.test(value);
  },

  checkIsBelowNumber(value: string, limit: number) {
    return parseInt(value) <= limit || !value.length;
  },

  checkIsNotDoubleZero(value: string) {
    return value !== "00";
  },
};

const Validator = {
  checkCreditCardNumber(value: string) {
    const maxDigit = 4;

    if (ValidatorCondition.checkMaxDigit(value, maxDigit))
      return { isError: false, isValid: false };

    if (!ValidatorCondition.checkIsDigit(value)) {
      return { isError: true, isValid: false };
    }

    return { isError: false, isValid: true };
  },

  checkCreditExpirationPeriod(value: string, name: string) {
    const maxDigit = 2;
    const limitValue = 12;

    if (ValidatorCondition.checkMaxDigit(value, maxDigit))
      return { isError: false, isValid: false };

    if (!ValidatorCondition.checkIsDigit(value)) return { isError: true, isValid: false };

    const isValidMonth =
      name === "month"
        ? ValidatorCondition.checkIsBelowNumber(value, limitValue) &&
          ValidatorCondition.checkIsNotDoubleZero(value)
        : true;

    if (!isValidMonth) return { isError: true, isValid: false };

    return { isError: false, isValid: true };
  },

  checkCreditCardOwner(value: string) {
    if (ValidatorCondition.checkIsEnglish(value)) return { isError: false, isValid: true };

    return { isError: true, isValid: false };
  },

  inputCreditCardInfo(value: string, name: string): { isError: boolean; isValid: boolean } {
    switch (name) {
      case "firstValue":
      case "secondValue":
      case "thirdValue":
      case "fourthValue":
        return this.checkCreditCardNumber(value);

      case "month":
      case "year":
        return this.checkCreditExpirationPeriod(value, name);

      case "name":
        return this.checkCreditCardOwner(value);

      default:
        return { isError: false, isValid: false };
    }
  },
};

export default Validator;
