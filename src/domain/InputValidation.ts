import ERROR_MESSAGES from '../constants/error';
import {
  DOUBLE_BLANK,
  MONTH_RANGE,
  UPPERCASE_AND_SPACE_ONLY,
  YEAR_RANGE,
} from '../constants/system';
import { CardInfo } from '../types/card';
function checkTrimBlank(n: string) {
  if (n.trim() === '' && n !== '') {
    throw new Error(ERROR_MESSAGES.INVALID_TRIM_BLANK);
  }
}

function checkDoubleBlank(n: string) {
  if (DOUBLE_BLANK.test(n)) {
    throw new Error(ERROR_MESSAGES.INVALID_DOUBLE_BLANK);
  }
}

function validateNumber(n: string) {
  if (!Number.isInteger(Number(n))) {
    throw new Error(ERROR_MESSAGES.INVALID_ONLY_NUMBER);
  }
}

function checkEmpty(n: string) {
  if (n.length === 0) {
    return true;
  }
}

function validateMonth(n: string) {
  if (checkEmpty(n) || n === '0') return;
  const month = Number(n);
  if (!(MONTH_RANGE.MIN <= month && month <= MONTH_RANGE.MAX)) {
    throw new Error(ERROR_MESSAGES.INVALID_MONTH);
  }
}

function validateYear(n: string) {
  if (checkEmpty(n)) return;
  const year = Number(n);
  if (!(YEAR_RANGE.MIN <= year && year <= YEAR_RANGE.MAX)) {
    throw new Error(ERROR_MESSAGES.INVALID_YEAR);
  }
}

function validateUpperCase(str: string) {
  if (!UPPERCASE_AND_SPACE_ONLY.test(str) && str.length !== 0) {
    throw new Error(ERROR_MESSAGES.INVALID_ONLY_UPPERCASE);
  }
}

interface ValidationMap {
  [key: string]: (n: string) => void;
}

const Validation: ValidationMap = {
  cardNumber: (n: string) => {
    checkTrimBlank(n);
    validateNumber(n);
  },
  month: (n: string) => {
    checkTrimBlank(n);
    validateNumber(n);
    validateMonth(n);
  },
  year: (n: string) => {
    checkTrimBlank(n);
    validateNumber(n);
    validateYear(n);
  },
  userName: (n: string) => {
    checkTrimBlank(n);
    checkDoubleBlank(n);
    validateUpperCase(n);
  },
  CVC: (n: string) => {
    checkTrimBlank(n);
    validateNumber(n);
  },

  password: (n: string) => {
    checkTrimBlank(n);
    validateNumber(n);
  },
};
export const validateButton = ({
  cardNumbers,
  expirationDate,
  userName,
  cardBrand,
  CVC,
  password,
}: CardInfo) => {
  return (
    Object.values(cardNumbers.cardNumberFields).every(
      (value) => !value.isError
    ) &&
    Object.values(expirationDate.expirationDateFields).every(
      (value) => !value.isError
    ) &&
    Object.values(userName.userNameField).every((value) => !value.isError) &&
    Object.values(cardBrand.cardBrandField).every((value) => !value.isError) &&
    Object.values(CVC.CVCField).every((value) => !value.isError) &&
    Object.values(password.passwordField).every((value) => !value.isError) &&
    cardNumbers.isNextField &&
    expirationDate.isNextField &&
    userName.isNextField &&
    cardBrand.isNextField &&
    CVC.isNextField &&
    password.isNextField
  );
};
export default Validation;
