import CARD_INPUTBOX_NAME from "../constants/cardInputBoxName";
import SIGN from "../constants/sign";

const ValidatorCondition = {
  checkMaxDigit(value: string, digit: number) {
    return value.length > digit;
  },

  checkIsDigit(value: string) {
    return /^\d+$/.test(value);
  },

  checkIsEnglish(value: string) {
    return /^[a-zA-Z\s]+$/.test(value);
  },

  checkIsBelowNumber(value: string, limit: number) {
    return parseInt(value) <= limit || !value.length;
  },

  checkIsNotDoubleZero(value: string) {
    return value !== SIGN.doubleZero;
  },

  checkIsFourDigit(value: string, digit: number) {
    return value.length === digit;
  },
};

const Validator = {
  checkCreditCardNumber(value: string) {
    const maxDigit = 4;

    if (!ValidatorCondition.checkIsDigit(value)) {
      return { isError: true, isValid: false };
    }
    if (ValidatorCondition.checkMaxDigit(value, maxDigit))
      return { isError: false, isValid: false };

    return { isError: false, isValid: value.length === maxDigit };
  },

  checkCreditCardCompany(value: string) {
    if (value !== "") return { isError: false, isValid: true };

    return { isError: true, isValid: false };
  },

  checkCreditCardExpirationPeriod(value: string, name: string) {
    const maxDigit = 2;
    const limitValue = 12;

    if (!ValidatorCondition.checkIsDigit(value)) {
      return { isError: true, isValid: false };
    }

    if (ValidatorCondition.checkMaxDigit(value, maxDigit)) {
      return { isError: false, isValid: false };
    }

    const isValidMonth =
      name === CARD_INPUTBOX_NAME.expirationPeriod.month
        ? ValidatorCondition.checkIsBelowNumber(value, limitValue) &&
          ValidatorCondition.checkIsNotDoubleZero(value)
        : true;

    if (!isValidMonth) {
      return { isError: true, isValid: false };
    }

    return { isError: false, isValid: true };
  },

  checkCreditCardOwner(value: string) {
    if (value.length === 0) return { isError: true, isValid: false };

    if (ValidatorCondition.checkIsEnglish(value)) return { isError: false, isValid: true };

    return { isError: true, isValid: false };
  },

  checkCreditCardCVC(value: string) {
    const maxDigit = 3;

    if (ValidatorCondition.checkMaxDigit(value, maxDigit))
      return { isError: false, isValid: false };

    if (!ValidatorCondition.checkIsDigit(value)) return { isError: true, isValid: false };

    return { isError: false, isValid: true };
  },

  checkCreditCardPassword(value: string) {
    const maxDigit = 2;

    if (ValidatorCondition.checkMaxDigit(value, maxDigit))
      return { isError: false, isValid: false };

    if (!ValidatorCondition.checkIsDigit(value)) return { isError: true, isValid: false };

    return { isError: false, isValid: true };
  },

  inputCreditCardInfo(value: string, name: string): { isError: boolean; isValid: boolean } {
    if (Object.keys(CARD_INPUTBOX_NAME.cardNumber).includes(name))
      return this.checkCreditCardNumber(value);

    if (Object.keys(CARD_INPUTBOX_NAME.expirationPeriod).includes(name))
      return this.checkCreditCardExpirationPeriod(value, name);

    if (Object.keys(CARD_INPUTBOX_NAME.owner).includes(name))
      return this.checkCreditCardOwner(value);

    if (Object.keys(CARD_INPUTBOX_NAME.cvc).includes(name)) return this.checkCreditCardCVC(value);

    if (Object.keys(CARD_INPUTBOX_NAME.password).includes(name))
      return this.checkCreditCardPassword(value);

    return { isError: false, isValid: false };
  },
};

export default Validator;
