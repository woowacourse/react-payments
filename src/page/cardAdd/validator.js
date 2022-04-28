import { isEnglish, isNumber } from '../../utils';
import { INPUT_MAX_LENGTH, DATE_RANGE } from '../../constants';

const validateYear = (value) => {
  if (value.length === 1) {
    return Number(value) >= 2;
  }

  if (value.length === INPUT_MAX_LENGTH.EXPIRY_DATE) {
    return Number(value) >= DATE_RANGE.MIN_YEAR;
  }

  return true;
};

const validateMonth = (value) => {
  if (value.length === 1) {
    return Number(value) <= 1;
  }

  if (value.length === INPUT_MAX_LENGTH.EXPIRY_DATE) {
    return Number(value) >= DATE_RANGE.MIN_MONTH && Number(value) <= DATE_RANGE.MAX_MONTH;
  }

  return true;
};

export const validator = {
  number(value) {
    return isNumber(Number(value));
  },
  expiryDate(value, name) {
    if (!isNumber(Number(value))) {
      return false;
    }

    return name === 'year' ? validateYear(value) : validateMonth(value);
  },
  ownerName(value) {
    return isEnglish(value);
  },
  privacyCode(value) {
    return isNumber(Number(value));
  },
  password(value) {
    return isNumber(Number(value));
  },
};

// 카드 폼의 각 정보들이 모두 입력되었는지 검사
const isFullNumber = (number) =>
  Object.values(number).every((value) => value.length === INPUT_MAX_LENGTH.NUMBER);

const isFullCompany = (company) => company !== '';

const isFullExpiryDate = (expiryDate) =>
  Object.values(expiryDate).every((value) => value.length === INPUT_MAX_LENGTH.EXPIRY_DATE);

const isFullPrivacyCode = (privacyCode) => privacyCode.length === INPUT_MAX_LENGTH.PRIVACY_CODE;

const isFullPassword = (password) =>
  Object.values(password).every((value) => value.length === INPUT_MAX_LENGTH.PASSWORD);

export const checkFullFilled = (cardInfo) => {
  const { number, company, expiryDate, privacyCode, password } = cardInfo;

  return (
    isFullNumber(number) &&
    isFullCompany(company) &&
    isFullExpiryDate(expiryDate) &&
    isFullPrivacyCode(privacyCode) &&
    isFullPassword(password)
  );
};
