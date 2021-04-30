import { isPositiveInteger } from '../../utils/util';

const getCardNumberMessage = (value) => {
  if (!isPositiveInteger(value)) {
    return '숫자만 입력가능합니다.';
  }

  if (value.length > 4) {
    return '최대 4자리 정수만 입력가능합니다.';
  }

  return '';
};

const getExpireDateMessage = (value) => {
  if (!isPositiveInteger(value)) {
    return '숫자만 입력가능합니다.';
  }

  if (value.length > 2) {
    return '최대 2자리 정수만 입력가능합니다.';
  }

  return '';
};

const getPasswordMessage = (value) => {
  if (!isPositiveInteger(value)) {
    return '숫자만 입력가능합니다.';
  }

  if (value.length > 1) {
    return '최대 1자리 정수만 입력가능합니다.';
  }

  return '';
};

const getUserMessage = (value) => {
  if (value.length > 30) {
    return '30글자 이하만 입력가능합니다.';
  }

  if (!isNaN(value.slice(-1)[0])) {
    return '숫자는 입력할 수 없습니다.';
  }

  if (value.length > 30) {
    return '30글자 초과는 입력할 수 없습니다.';
  }

  return '';
};

const getCVCMessage = (value) => {
  if (!isPositiveInteger(value)) {
    return '숫자만 입력가능합니다.';
  }

  if (value.length > 3) {
    return '3글자 초과는 입력할 수 없습니다.';
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
