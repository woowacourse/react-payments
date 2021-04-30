import { ERROR_MESSAGE, INPUT } from '../../constants/constant';
import { isPositiveInteger } from '../../utils/util';

const getCardNumberMessage = (value) => {
  if (!isPositiveInteger(value)) {
    return ERROR_MESSAGE.ONLY_POSITIVE_NUMBER;
  }

  if (value.length > INPUT.MAX_LENGTH.CARD.NUMBERS) {
    return ERROR_MESSAGE.MAXIMUM_CARD_NUMBER;
  }

  return '';
};

const getExpireDateMessage = (value) => {
  if (!isPositiveInteger(value)) {
    return ERROR_MESSAGE.ONLY_POSITIVE_NUMBER;
  }

  if (value.length > INPUT.MAX_LENGTH.CARD.EXPIRE_DATE) {
    return ERROR_MESSAGE.MAXIMUM_EXPIRE_DATE;
  }

  return '';
};

const getPasswordMessage = (value) => {
  if (!isPositiveInteger(value)) {
    return ERROR_MESSAGE.ONLY_POSITIVE_NUMBER;
  }

  if (value.length > 1) {
    return ERROR_MESSAGE.MAXIMUM_PASSWORD;
  }

  return '';
};

const getUserMessage = (value) => {
  if (value.length > 30) {
    return ERROR_MESSAGE.MAXIMUM_USER;
  }

  if (!isNaN(value.slice(-1)[0])) {
    return ERROR_MESSAGE.IS_NUMBER;
  }

  return '';
};

const getCVCMessage = (value) => {
  if (!isPositiveInteger(value)) {
    return ERROR_MESSAGE.ONLY_POSITIVE_NUMBER;
  }

  if (value.length > 3) {
    return ERROR_MESSAGE.MAXIMUM_CVC;
  }

  return '';
};

export const cardFormErrorMessages = {
  numbers: (value) => getCardNumberMessage(value),
  expireDate: (value) => getExpireDateMessage(value),
  password: (value) => getPasswordMessage(value),
  user: (value) => getUserMessage(value),
  cvc: (value) => getCVCMessage(value),
};
