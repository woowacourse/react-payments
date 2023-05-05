import { ValidatorResponseType } from '../types';

const CARD_NUMBER_FORMAT = /^(?:\d{4}-){3}\d{4}$/;
const YEAR_MONTH_FORMAT = /^\d{2}\/\d{2}$/;
const STRICT_YEAR_MONTH_FORMAT = /^(?:1[0-2]|0[1-9])\/\d{2}$/;
const CVC_FORMAT = /^\d{3}$/;
const PASSWORD_FORMAT = /^\d{2}$/;
const LIMIT_LENGTH = 30;

const checkValidCardNumber = (cardNumber: string): ValidatorResponseType => {
  if (!CARD_NUMBER_FORMAT.test(cardNumber)) {
    return { result: false, errorMessage: '16자리의 숫자로만 입력해 주세요!' };
  }

  return { result: true, errorMessage: '' };
};

const checkValidYearMonth = (yearMonth: string): ValidatorResponseType => {
  if (!YEAR_MONTH_FORMAT.test(yearMonth)) {
    return { result: false, errorMessage: '4자리의 숫자로만 입력해 주세요!' };
  }

  if (!STRICT_YEAR_MONTH_FORMAT.test(yearMonth)) {
    return { result: false, errorMessage: '월은 1부터 12까지의 자연수로만 입력해 주세요!' };
  }

  return { result: true, errorMessage: '' };
};

const checkOwnerNameLength = (cardOwnerName: string): ValidatorResponseType => {
  if (cardOwnerName.length > LIMIT_LENGTH) {
    return { result: false, errorMessage: '이름의 글자 수는 30글자 이하로 입력해 주세요!' };
  }

  return { result: true, errorMessage: '' };
};

const checkValidCVC = (cardNumber: string): ValidatorResponseType => {
  if (!CVC_FORMAT.test(cardNumber)) {
    return { result: false, errorMessage: '3자리의 숫자로만 입력해 주세요!' };
  }

  return { result: true, errorMessage: '' };
};

const checkValidPassword = (password: string): ValidatorResponseType => {
  if (!PASSWORD_FORMAT.test(password)) {
    return { result: false, errorMessage: '2자리의 숫자로만 입력해 주세요!' };
  }

  return { result: true, errorMessage: '' };
};

export { checkValidCardNumber, checkValidYearMonth, checkOwnerNameLength, checkValidCVC, checkValidPassword };
