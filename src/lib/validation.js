import { CARD_FORM_RULE, ERROR_MESSAGE } from '../constants';

import { isEmpty } from '../utils';

const isAllNumber = (numbers) =>
  numbers.every((number) => Number.isInteger(Number(number)));

const isFullEachCardNumber = (number) => number.length === CARD_FORM_RULE.CARD_NUMBER_EACH_FULL_LENGTH;

const isFullCardNumbers = (cardNumber) =>
  cardNumber.every(isFullEachCardNumber);

const isFullEachCardExpiration = (number) => number.length === CARD_FORM_RULE.CARD_EXPRATION_EACH_FULL_LENGTH;

const isFullCardExpiration = (cardExpiration) =>
  cardExpiration.every(isFullEachCardExpiration);

const withinRangeCardExpiration = (month) =>
  Number(month) >= CARD_FORM_RULE.CARD_EXPRATION_MIN_MONTH && Number(month) <= CARD_FORM_RULE.CARD_EXPRATION_MAX_MONTH;

const isRemainCardExpiration = ([month, year]) => {
  const today = new Date();
  const todayYear = today.getFullYear() % 2000;
  const todayMonth = today.getMonth() + 1;

  return Number(year) > todayYear || (Number(year) === todayYear && Number(month) > todayMonth);
};

const withinRangeCardOwnerLength = (cardOwner) => cardOwner.length <= CARD_FORM_RULE.CARD_OWNER_MAX_LENGTH;

const isFullCardCvc = (cardCvc) => cardCvc.length === CARD_FORM_RULE.CARD_CVC_FULL_LENGTH;

const isFullEachCardPassword = (number) => !isEmpty(number);

const isFullCardPassword = (cardPassword) => cardPassword.every(isFullEachCardPassword);

const isSelectedCardCompany = (cardCompanyName) => !isEmpty(cardCompanyName);

export const checkCardNumber = (cardNumber) => {
  if (!isAllNumber(cardNumber)) {
    throw new Error(ERROR_MESSAGE.CARD_NUMBER_ONLY_NUMBER);
  }

  if (!isFullCardNumbers(cardNumber)) {
    throw new Error(ERROR_MESSAGE.ENTER_ALL_CARD_NUMBERS);
  }
};

export const isValidEachCardNumber = (number) =>
  Number.isInteger(Number(number)) && isFullEachCardNumber(number);

export const checkCardExpiration = (cardExpiration) => {
  if (!isAllNumber(cardExpiration)) {
    throw new Error(ERROR_MESSAGE.CARD_EXPIRATION_ONLY_NUMBER);
  }

  if (!isFullCardExpiration(cardExpiration)) {
    throw new Error(ERROR_MESSAGE.ENTER_ALL_CARD_EXPIRATION);
  }

  if (!withinRangeCardExpiration(cardExpiration[0])) {
    throw new Error(ERROR_MESSAGE.WITHIN_RANGE_CARD_EXPIRATION);
  }

  if (!isRemainCardExpiration(cardExpiration)) {
    throw new Error(ERROR_MESSAGE.EXPIRATION_DATE_EXCEEDED);
  }
};

export const isValidCardExpirationMonth = (month) =>
  Number.isInteger(Number(month)) && isFullEachCardExpiration(month) && withinRangeCardExpiration(month);

export const isValidCardExpiration = (cardExpiration) =>
  Number.isInteger(Number(cardExpiration[1])) && isFullEachCardExpiration(cardExpiration[1]) && isValidCardExpirationMonth(cardExpiration[0]) && isRemainCardExpiration(cardExpiration);

export const checkCardOwner = (cardOwner) => {
  if (!withinRangeCardOwnerLength(cardOwner)) {
    throw new Error(ERROR_MESSAGE.WITHIN_RANGE_CARD_OWNER_LENGTH);
  }
};

export const checkCardCvc = (cardCvc) => {
  if (!Number.isInteger(Number(cardCvc))) {
    throw new Error(ERROR_MESSAGE.CARD_CVC_ONLY_NUMBER);
  }

  if (!isFullCardCvc(cardCvc)) {
    throw new Error(ERROR_MESSAGE.ENTER_ALL_CARD_CVC);
  }
};

export const isValidCardCvc = (cardCvc) =>
  Number.isInteger(Number(cardCvc)) && isFullCardCvc(cardCvc);

export const checkCardPassword = (cardPassword) => {
  if (!isAllNumber(cardPassword)) {
    throw new Error(ERROR_MESSAGE.CARD_PASSWORD_ONLY_NUMBER);
  }

  if (!isFullCardPassword(cardPassword)) {
    throw new Error(ERROR_MESSAGE.ENTER_ALL_CARD_PASSWORD);
  }
};

export const isValidEachCardPassword = (number) =>
  Number.isInteger(Number(number)) && isFullEachCardPassword(number);

export const checkCardCompany = (cardCompanyIndex) => {
  if (!isSelectedCardCompany(cardCompanyIndex)) {
    throw new Error(ERROR_MESSAGE.SELECT_CARD_COMPANY);
  }
};
