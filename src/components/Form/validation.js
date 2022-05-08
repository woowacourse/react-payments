import {
  hasSpace,
  isLengthBelow,
  isLengthOver,
  isNotKoreanOrSpace,
  isNotNumber,
} from '../../utils/validations';

export const checkFormCompletion = ({ form }) => {
  const { cardNumber, expirationDate, securityCode, password } = form;

  if (Object.keys(cardNumber).some(key => isLengthBelow(cardNumber[key], 4))) {
    throw new Error('카드 번호를 완벽히 입력해주세요');
  }

  if (Object.keys(expirationDate).some(key => isLengthBelow(expirationDate[key], 2))) {
    throw new Error('만료일을 완벽히 입력해주세요');
  }

  if (isLengthBelow(securityCode, 3)) {
    throw new Error('CVC/CVV를 완벽히 입력해주세요');
  }

  if (Object.keys(password).some(key => isLengthBelow(password[key], 1))) {
    throw new Error('비밀번호를 완벽히 입력해주세요');
  }

  return true;
};

export const checkFormValidation = ({ expirationDate }) => {
  if (expirationDate.month === '00' || Number(expirationDate.month) > 12) {
    throw new Error('1~12사이의 월을 입력해주세요');
  }
  return true;
};

export const checkUniqueCard = (cardInfo, cardList) => {
  const isOverlap = Object.keys(cardList).some(key => {
    return Object.keys(cardInfo).every(
      numKey => cardInfo[numKey] === cardList[key].cardNumber[numKey],
    );
  });

  if (isOverlap) {
    throw new Error('이미 같은 번호의 카드가 존재합니다.');
  }
  return true;
};

export const isNumberInRange = (value, maxLength) => {
  if (hasSpace(value)) {
    return false;
  }

  if (isNotNumber(value)) {
    return false;
  }

  if (isLengthOver(value, maxLength)) {
    return false;
  }

  return true;
};

export const isKoreanInRange = (value, maxLength) => {
  if (isLengthOver(value, maxLength)) {
    return false;
  }

  if (!isNotKoreanOrSpace(value)) {
    return false;
  }

  return true;
};
