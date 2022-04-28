import { isNumber, isEnglishName } from 'utils';
import { ERROR_MESSAGE, EXPIRE_DATE } from 'constants';

const isExpiredDate = (year, month) => {
  const inputDate = new Date();

  inputDate.setFullYear(year);
  inputDate.setMonth(month);

  const inputDateTimeStamp = Math.floor(inputDate.getTime() / 1000);
  const nowDateTimeStamp = Math.floor(new Date().getTime() / 1000);

  if (inputDateTimeStamp > nowDateTimeStamp) {
    return false;
  }

  return true;
};

const validateExpireDate = (expireMonth, expireYear) => {
  if (!isNumber(expireMonth) || !isNumber(expireYear)) {
    throw new Error(ERROR_MESSAGE.IS_NOT_INTEGER);
  }

  if (expireMonth < EXPIRE_DATE.MIN_MONTH || expireMonth > EXPIRE_DATE.MAX_MONTH) {
    throw new Error(ERROR_MESSAGE.EXPIRE_DATE.IS_NOT_VALIDATE_MONTH);
  }

  if (expireMonth.length < EXPIRE_DATE.MONTH_LENGTH) {
    throw new Error(ERROR_MESSAGE.EXPIRE_DATE.IS_NOT_MONTH_LENGTH);
  }

  if (expireYear.length < EXPIRE_DATE.YEAR_LENGTH) {
    throw new Error(ERROR_MESSAGE.EXPIRE_DATE.IS_NOT_YEAR_LENGTH);
  }

  if (isExpiredDate(Number(expireYear) + EXPIRE_DATE.YEAR_UNIT, expireMonth)) {
    throw new Error(ERROR_MESSAGE.EXPIRE_DATE.IS_EXPIRED);
  }
};

const validateCardPassword = (cardPassword) => {
  if (!isNumber(cardPassword)) {
    throw new Error(ERROR_MESSAGE.IS_NOT_INTEGER);
  }
};

const validateSecurityCode = (securityCode) => {
  if (!isNumber(securityCode)) {
    throw new Error(ERROR_MESSAGE.IS_NOT_INTEGER);
  }
};

const validateUserName = (userName) => {
  if (!isEnglishName(userName)) {
    throw new Error(ERROR_MESSAGE.USER_NAME.IS_NOT_ENGLISH_NAME);
  }
};

export { validateExpireDate, validateCardPassword, validateSecurityCode, validateUserName };
