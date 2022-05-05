import { CARD_FORM_RULE, ERROR_MESSAGE } from '../constants';

import { isEmpty } from '../utils';

const isAllNumber = (numbers) =>
  numbers.every((number) => Number.isInteger(Number(number)));

const isFullCardNumbers = (cardNumber) =>
  cardNumber.reduce((acc, number) => acc + number.length, 0) === CARD_FORM_RULE.CARD_NUMBER_FULL_LENGTH;

const isFullCardExpiration = (cardExpiration) =>
  cardExpiration.every((number) => number.length === CARD_FORM_RULE.CARD_EXPRATION_EACH_FULL_LENGTH);

const withinRangeCardExpiration = ([month]) =>
  Number(month) >= CARD_FORM_RULE.CARD_EXPRATION_MIN_MONTH && Number(month) <= CARD_FORM_RULE.CARD_EXPRATION_MAX_MONTH;

const isRemainCardExpiration = ([month, year]) => {
  const today = new Date();
  const todayYear = today.getFullYear() % 2000;
  const todayMonth = today.getMonth() + 1;

  return Number(year) > todayYear || (Number(year) === todayYear && Number(month) > todayMonth);
};

const withinRangeCardOwnerLength = (cardOwner) => cardOwner.length <= CARD_FORM_RULE.CARD_OWNER_MAX_LENGTH;

const isFullCardCvc = (cardCvc) => cardCvc.length === CARD_FORM_RULE.CARD_CVC_FULL_LENGTH;

const isFullCardPassword = (cardPassword) => cardPassword.every((number) => !isEmpty(number));

const isSelectedCardCompany = (cardCompanyName) => !isEmpty(cardCompanyName);

export const checkCardNumber = (cardNumber) => {
  if (!isAllNumber(cardNumber)) {
    throw new Error(ERROR_MESSAGE.CARD_NUMBER_ONLY_NUMBER);
  }

  if (!isFullCardNumbers(cardNumber)) {
    throw new Error(ERROR_MESSAGE.ENTER_ALL_CARD_NUMBERS);
  }
};

export const checkCardExpiration = (cardExpiration) => {
  if (!isAllNumber(cardExpiration)) {
    throw new Error(ERROR_MESSAGE.CARD_EXPIRATION_ONLY_NUMBER);
  }

  if (!isFullCardExpiration(cardExpiration)) {
    throw new Error(ERROR_MESSAGE.ENTER_ALL_CARD_EXPIRATION);
  }

  if (!withinRangeCardExpiration(cardExpiration)) {
    throw new Error(ERROR_MESSAGE.WITHIN_RANGE_CARD_EXPIRATION);
  }

  if (!isRemainCardExpiration(cardExpiration)) {
    throw new Error(ERROR_MESSAGE.EXPIRATION_DATE_EXCEEDED);
  }
};

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

export const checkCardPassword = (cardPassword) => {
  if (!isAllNumber(cardPassword)) {
    throw new Error(ERROR_MESSAGE.CARD_PASSWORD_ONLY_NUMBER);
  }

  if (!isFullCardPassword(cardPassword)) {
    throw new Error(ERROR_MESSAGE.ENTER_ALL_CARD_PASSWORD);
  }
};

export const checkCardCompany = (cardCompanyIndex) => {
  if (!isSelectedCardCompany(cardCompanyIndex)) {
    throw new Error(ERROR_MESSAGE.SELECT_CARD_COMPANY);
  }
};
