import { MAX_LENGTH, MAX_MONTH } from "../constants";

export const isOverMaxLength = (target, maxLength) =>
  target.value.length > maxLength;

export const isInValidExpireDate = (expireDate) =>
  Object.values(expireDate).some(
    (date) => date.length !== MAX_LENGTH.EXPIRE_DATE
  ) || Number(expireDate.month) > MAX_MONTH;

export const isInValidCardPassword = (cardPassword) =>
  Object.values(cardPassword).some(
    (password) => password.length !== MAX_LENGTH.CARD_PASSWORD
  );

export const isCompletePasswordInput = (cardPassword) =>
  Object.values(cardPassword).every(
    (password) => password >= MAX_LENGTH.CARD_PASSWORD
  );

export const isInValidCardNumber = (cardNumber) =>
  Object.values(cardNumber).some(
    (number) => number.length !== MAX_LENGTH.CARD_NUMBER
  );

export const isInValidCardType = (cardType) => cardType === "defaultCard";

export const isInValidSecurityCode = (securityCode) =>
  securityCode.length !== MAX_LENGTH.SECURITY_CODE;

export const isAllInputReady = ({
  cardNumberReady,
  expireDateReady,
  securityCodeReady,
  cardPasswordReady,
  cardTypeReady,
}) => {
  return !(
    cardNumberReady &&
    expireDateReady &&
    securityCodeReady &&
    cardPasswordReady &&
    cardTypeReady
  );
};

export const isInvalidCardName = (cardName) =>
  cardName.length === 0 || cardName.length > MAX_LENGTH.CARD_NAME;
