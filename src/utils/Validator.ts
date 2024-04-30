import { CreditCardAllValues, CreditCardSpecificValue } from "./../@types/CreditCard";
import SIGN from "../constants/sign";
import CARD_INPUTBOX_NAME from "../constants/cardInputBoxName";
import VALIDATE_STATUS, { ValidateStatus } from "../constants/validateStatus";
import CARD_INPUT_LENGTH from "../constants/cardInputLength";

const ValidatorCondition = {
  checkMaxDigit(value: string, digit: number) {
    return value.length > digit;
  },

  checkEqualLength(value: string, digit: number) {
    return value.length === digit;
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
    return value !== SIGN.doubleZero;
  },
};

const Validator = {
  checkCreditCardNumber(value: string): ValidateStatus {
    const maxDigit = 4;

    if (ValidatorCondition.checkMaxDigit(value, maxDigit)) return VALIDATE_STATUS.notValid;

    if (!ValidatorCondition.checkIsDigit(value)) {
      return VALIDATE_STATUS.error;
    }

    return VALIDATE_STATUS.valid;
  },

  checkCreditExpirationPeriod(value: string, name: string): ValidateStatus {
    const maxDigit = 2;
    const limitValue = 12;

    if (ValidatorCondition.checkMaxDigit(value, maxDigit)) return VALIDATE_STATUS.notValid;

    if (!ValidatorCondition.checkIsDigit(value)) return VALIDATE_STATUS.error;

    const isValidMonth =
      name === CARD_INPUTBOX_NAME.expirationPeriod.month
        ? ValidatorCondition.checkIsBelowNumber(value, limitValue) &&
          ValidatorCondition.checkIsNotDoubleZero(value)
        : true;

    if (!isValidMonth) return VALIDATE_STATUS.error;

    return VALIDATE_STATUS.valid;
  },

  checkCreditCardOwner(value: string): ValidateStatus {
    if (ValidatorCondition.checkIsEnglish(value)) return VALIDATE_STATUS.valid;

    return VALIDATE_STATUS.error;
  },

  checkCreditCardCvc(value: string): ValidateStatus {
    const maxDigit = 3;
    if (ValidatorCondition.checkMaxDigit(value, maxDigit)) return VALIDATE_STATUS.notValid;

    if (!ValidatorCondition.checkIsDigit(value)) return VALIDATE_STATUS.error;

    return VALIDATE_STATUS.valid;
  },

  checkCreditCardPassword(value: string): ValidateStatus {
    const maxDigit = 2;
    if (ValidatorCondition.checkMaxDigit(value, maxDigit)) return VALIDATE_STATUS.notValid;

    if (!ValidatorCondition.checkIsDigit(value)) return VALIDATE_STATUS.error;

    return VALIDATE_STATUS.valid;
  },

  inputCreditCardInfo(value: string, name: string): ValidateStatus {
    if (Object.keys(CARD_INPUTBOX_NAME.cardNumber).includes(name))
      return this.checkCreditCardNumber(value);

    if (Object.keys(CARD_INPUTBOX_NAME.expirationPeriod).includes(name))
      return this.checkCreditExpirationPeriod(value, name);

    if (Object.keys(CARD_INPUTBOX_NAME.owner).includes(name))
      return this.checkCreditCardOwner(value);

    if (CARD_INPUTBOX_NAME.info.cvc === name) return this.checkCreditCardCvc(value);

    if (CARD_INPUTBOX_NAME.authentication.password === name)
      return this.checkCreditCardPassword(value);

    return VALIDATE_STATUS.notValid; // 예상치 못한 값이 들어오는 경우 유효하지 않는 값으로 처리
  },

  blurCreditCardInfo(value: string, name: string): Omit<ValidateStatus, "error"> {
    const maxDigit = CARD_INPUT_LENGTH[name as keyof CreditCardSpecificValue];

    if (name === CARD_INPUTBOX_NAME.owner.name) return VALIDATE_STATUS.valid;
    if (ValidatorCondition.checkEqualLength(value, maxDigit)) return VALIDATE_STATUS.valid;

    return VALIDATE_STATUS.notValid; // 예상치 못한 값이 들어오는 경우 유효하지 않는 값으로 처리
  },

  inputCreditCardIsComplete(value: CreditCardSpecificValue): boolean {
    return Object.entries(value).every(([key, val]) => {
      return CARD_INPUT_LENGTH[key as keyof CreditCardSpecificValue] === val.length;
    });
  },

  inputIsFilled(inputLength: number, name: keyof CreditCardAllValues) {
    return CARD_INPUT_LENGTH[name] === inputLength;
  },
};

export default Validator;
