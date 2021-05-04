import {
  CARD_INFOS_LENGTH,
  VALIDATION_MESSAGE,
} from '../../constants/validation';
import { isPositiveInteger } from '../../utils/utils';

export const getCardNumberMessage = (value) => {
  if (!isPositiveInteger(value)) {
    return VALIDATION_MESSAGE.NUMBER_ONLY;
  }

  if (value.length > CARD_INFOS_LENGTH.CARD) {
    return VALIDATION_MESSAGE.MAX_LENGTH.CARD;
  }

  return '';
};

export const getExpireDateMessage = (value) => {
  if (!isPositiveInteger(value)) {
    return VALIDATION_MESSAGE.NUMBER_ONLY;
  }

  if (value.length > CARD_INFOS_LENGTH.EXPIRE_DATE) {
    return VALIDATION_MESSAGE.MAX_LENGTH.EXPIRE_DATE;
  }

  return '';
};

export const getPasswordMessage = (value) => {
  if (!isPositiveInteger(value)) {
    return VALIDATION_MESSAGE.NUMBER_ONLY;
  }

  if (value.length > CARD_INFOS_LENGTH.PASSWORD) {
    return VALIDATION_MESSAGE.MAX_LENGTH.PASSWORD;
  }

  return '';
};

export const getUserMessage = (value) => {
  if (value.length > CARD_INFOS_LENGTH.USER_NAME) {
    return VALIDATION_MESSAGE.MAX_LENGTH.USER_NAME;
  }

  if (!isNaN(value.slice(-1)[0])) {
    return '숫자는 입력할 수 없습니다.';
  }

  if (value.length > CARD_INFOS_LENGTH.USER_NAME) {
    return VALIDATION_MESSAGE.MAX_LENGTH.USER_NAME;
  }

  return '';
};

export const getCVCMessage = (value) => {
  if (!isPositiveInteger(value)) {
    return VALIDATION_MESSAGE.NUMBER_ONLY;
  }

  if (value.length > 3) {
    return VALIDATION_MESSAGE.MAX_LENGTH.CVC;
  }

  return '';
};

export const messageObject = {
  numbers: (value) => getCardNumberMessage(value),
  expireDate: (value) => getExpireDateMessage(value),
  password: (value) => getPasswordMessage(value),
};
