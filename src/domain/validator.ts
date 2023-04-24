import {
  CARD_FORM_ERROR_MESSAGE,
  CARD_NUMBER_LENGTH,
  CARD_PASSWORD_LENGTH,
  CARD_SECURITY_CODE_LENGTH,
} from '../constants';
import type { CardNumber, CardPassword, ExpirationDate, SecurityCode } from '../components/Common/Card/types';

const { FULL_NUMBER, EXPIRATION_DATE, OUT_OF_EXPIRATION_DATE, FULL_PASSWORD, FULL_SECURITY_CODE } =
  CARD_FORM_ERROR_MESSAGE;

export const checkCardNumber = (cardNumber: CardNumber) => {
  if (cardNumber.join('').length !== CARD_NUMBER_LENGTH) {
    throw new Error(FULL_NUMBER);
  }
};

export const checkExpirationDate = (expirationDate: ExpirationDate) => {
  const [month, year] = expirationDate;
  const now = new Date();
  const nowYear = now.getFullYear() % 100;
  const nowMonth = now.getMonth() + 1;

  const isValidDate = () => {
    if (nowYear > Number(year)) {
      return false;
    }
    if (nowYear === Number(year) && nowMonth > Number(month)) {
      return false;
    }
    return true;
  };

  if (Number(month) > 12 || Number(month) < 1) {
    throw new Error(EXPIRATION_DATE);
  }

  if (!isValidDate()) {
    throw new Error(OUT_OF_EXPIRATION_DATE);
  }
};

export const checkSecurityCode = (securityCode: SecurityCode) => {
  if (securityCode.join('').length !== CARD_SECURITY_CODE_LENGTH) {
    throw new Error(FULL_SECURITY_CODE);
  }
};

export const checkPassword = (password: CardPassword) => {
  if (password.join('').length !== CARD_PASSWORD_LENGTH) {
    throw new Error(FULL_PASSWORD);
  }
};
