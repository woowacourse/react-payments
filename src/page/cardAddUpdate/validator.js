import { isEnglish, isNumber } from 'utils';
import { INPUT_MAX_LENGTH, DATE_RANGE } from 'constants';

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
  cardNumber(value) {
    return isNumber(Number(value));
  },
  expiryDate(value, name) {
    if (!isNumber(Number(value))) {
      return false;
    }

    return name === 'year' ? validateYear(value) : validateMonth(value);
  },
  ownerName(value) {
    if (value.length > 20) {
      alert('😈이름이 너무 길어요! 개명을 추천드려요.😈');
    }

    return isEnglish(value);
  },
  privacyCode(value) {
    return isNumber(Number(value));
  },
  password(value) {
    return isNumber(Number(value));
  },
  alias() {
    return true;
  },
};

// 카드 폼의 각 정보들이 모두 입력되었는지 검사
export const isFullNumber = (number) =>
  Object.values(number).every((value) => value.length === INPUT_MAX_LENGTH.CARD_NUMBER);

export const isFullCompany = (company) => company !== '';

export const isFullExpiryDate = (expiryDate) =>
  Object.values(expiryDate).every((value) => value.length === INPUT_MAX_LENGTH.EXPIRY_DATE);

export const isFullPrivacyCode = (privacyCode) =>
  privacyCode.length === INPUT_MAX_LENGTH.PRIVACY_CODE;

export const isFullPassword = (password) =>
  Object.values(password).every((value) => value.length === INPUT_MAX_LENGTH.PASSWORD);

export const isFullCardAlias = (cardAlias) => cardAlias !== '';

export const checkFullFilled = (cardInfo) => {
  const { cardNumber, company, expiryDate, privacyCode, password } = cardInfo;

  return (
    isFullNumber(cardNumber) &&
    isFullCompany(company) &&
    isFullExpiryDate(expiryDate) &&
    isFullPrivacyCode(privacyCode) &&
    isFullPassword(password)
  );
};
