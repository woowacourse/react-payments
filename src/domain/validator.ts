import { Validator } from '../types/validator';

const ERROR_MESSAGE = Object.freeze({
  CARD_NUMBERS: '카드 번호는 0000-0000-0000-0000의 형태로 입력 해 주세요.',
  SECURITY_NUMBERS: '보안 코드 3자리를 입력 해 주세요.',
  PASSWORD: '비밀번호 앞 두 자리를 입력 해 주세요.',
  EXPIRATION: '만료일은 00 / 00의 형태로 입력 해 주세요.',
  EXPIRATION_MONTH: '월은 01~12까지의 값만 입력할 수 있습니다.',
  EXPIRATION_YEAR: '지나간 연도를 입력할 수 없습니다.',
  EXPIRATION_DATE: '지나간 날짜를 입력할 수 없습니다.',
});

const validateCardNumbers = (value: string) => {
  if (value.length < 4) {
    return ERROR_MESSAGE.CARD_NUMBERS;
  }

  return '';
};

const validateExpirationMonth = (value: string) => {
  if (value.length < 2) {
    return ERROR_MESSAGE.EXPIRATION;
  }

  if (Number(value) < 0 || Number(value) > 12) {
    return ERROR_MESSAGE.EXPIRATION_MONTH;
  }

  return '';
};

const validateExpirationYear = (value: string) => {
  if (value.length < 2) {
    return ERROR_MESSAGE.EXPIRATION;
  }

  const curYear = String(new Date().getFullYear()).substring(2);
  if (Number(value) < Number(curYear)) {
    return ERROR_MESSAGE.EXPIRATION_YEAR;
  }

  return '';
};

const validateOwnerName = (value: string) => {
  return '';
};

const validateSecurityNumbers = (value: string) => {
  if (value.length < 3) {
    return ERROR_MESSAGE.SECURITY_NUMBERS;
  }

  return '';
};

const validatePassword = (value: string) => {
  if (value.length < 1) {
    return ERROR_MESSAGE.PASSWORD;
  }

  return '';
};

const validator: Validator = {
  firstCardNumbers: validateCardNumbers,
  secondCardNumbers: validateCardNumbers,
  thirdCardNumbers: validateCardNumbers,
  fourthCardNumbers: validateCardNumbers,
  expirationMonth: validateExpirationMonth,
  expirationYear: validateExpirationYear,
  ownerName: validateOwnerName,
  securityNumbers: validateSecurityNumbers,
  firstPassword: validatePassword,
  secondPassword: validatePassword,
};

export default validator;
