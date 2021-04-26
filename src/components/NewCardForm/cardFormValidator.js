import { isPositiveInteger } from '../../utils/utils';

export const getCardNumberMessage = (value) => {
  if (!isPositiveInteger(value)) {
    return '숫자만 입력가능합니다.';
  }

  if (value.length > 4) {
    return '최대 4자리 정수만 입력가능합니다.';
  }

  return '';
};

export const getExpireDateMessage = (value) => {
  if (!isPositiveInteger(value)) {
    return '숫자만 입력가능합니다.';
  }

  if (value.length > 2) {
    return '최대 2자리 정수만 입력가능합니다.';
  }

  return '';
};

export const getPasswordMessage = (value) => {
  if (!isPositiveInteger(value)) {
    return '숫자만 입력가능합니다.';
  }

  if (value.length > 1) {
    return '1글자만 입력 가능합니다.';
  }

  return '';
};

export const getUserMessage = (value) => {
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

export const getCVCMessage = (value) => {
  if (!isPositiveInteger(value)) {
    return '숫자만 입력가능합니다.';
  }

  if (value.length > 3) {
    return '3글자 초과는 입력할 수 없습니다.';
  }

  return '';
};
