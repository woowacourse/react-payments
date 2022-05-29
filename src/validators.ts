import { isNumber, isEnglishName } from '@/utils';
import { CARD_NUMBER, CARD_PASSWORD, ERROR_MESSAGE, EXPIRE_DATE, SECURITY_CODE } from '@/constants';

interface CardState {
  cardNumber: string[];
  cardPassword: string;
  expireMonth: string;
  expireYear: string;
  securityCode: string;
  userName: string;
}

interface ExpireDate {
  expireMonth: string;
  expireYear: string;
}

const isExpiredDate = (year: number, month: number) => {
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

const validateCardNumber = (cardNumber: string[]) => {
  if (cardNumber.join('').length < CARD_NUMBER.UNIT_COUNT * CARD_NUMBER.UNIT_LENGTH) {
    throw new Error(ERROR_MESSAGE.CARD_NUMBER.IS_NOT_LENGTH);
  }
};

const validateExpireDate = ({ expireMonth, expireYear }: ExpireDate) => {
  if (!isNumber(expireMonth) || !isNumber(expireYear)) {
    throw new Error(ERROR_MESSAGE.EXPIRE_DATE.IS_NOT_INTEGER);
  }

  if (Number(expireMonth) < EXPIRE_DATE.MONTH.MIN || Number(expireMonth) > EXPIRE_DATE.MONTH.MAX) {
    throw new Error(ERROR_MESSAGE.EXPIRE_DATE.IS_NOT_VALIDATE_MONTH);
  }

  if (expireMonth.length !== EXPIRE_DATE.MONTH.LENGTH) {
    throw new Error(ERROR_MESSAGE.EXPIRE_DATE.IS_NOT_MONTH_LENGTH);
  }

  if (expireYear.length !== EXPIRE_DATE.YEAR.LENGTH) {
    throw new Error(ERROR_MESSAGE.EXPIRE_DATE.IS_NOT_YEAR_LENGTH);
  }

  if (isExpiredDate(Number(expireYear) + EXPIRE_DATE.YEAR.UNIT, Number(expireMonth))) {
    throw new Error(ERROR_MESSAGE.EXPIRE_DATE.IS_EXPIRED);
  }
};

const validateCardPassword = (cardPassword: string) => {
  if (!isNumber(cardPassword)) {
    throw new Error(ERROR_MESSAGE.CARD_PASSWORD.IS_NOT_INTEGER);
  }

  if (cardPassword.length !== CARD_PASSWORD.LENGTH) {
    throw new Error(ERROR_MESSAGE.CARD_PASSWORD.IS_NOT_LENGTH);
  }
};

const validateSecurityCode = (securityCode: string) => {
  if (!isNumber(securityCode)) {
    throw new Error(ERROR_MESSAGE.SECURITY_CODE.IS_NOT_INTEGER);
  }

  if (securityCode.length !== SECURITY_CODE.LENGTH) {
    throw new Error(ERROR_MESSAGE.SECURITY_CODE.IS_NOT_LENGTH);
  }
};

const validateUserName = (userName: string) => {
  if (!isEnglishName(userName)) {
    throw new Error(ERROR_MESSAGE.USER_NAME.IS_NOT_ENGLISH_NAME);
  }
};

const validateCard = ({
  cardNumber,
  cardPassword,
  expireMonth,
  expireYear,
  securityCode,
  userName,
}: CardState) => {
  validateCardNumber(cardNumber);
  validateCardPassword(cardPassword);
  validateExpireDate({ expireMonth, expireYear });
  validateSecurityCode(securityCode);
  userName && validateUserName(userName);
};

export {
  validateCardNumber,
  validateCardPassword,
  validateExpireDate,
  validateSecurityCode,
  validateUserName,
  validateCard,
};
