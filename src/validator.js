import { ERROR_MESSAGE } from './constants';

const validator = (conditions) => {
  conditions.forEach(({ checker, errorMsg }) => {
    if (checker()) throw new Error(errorMsg);
  });
};

const checkCardNumber = (number1, number2, number3, number4) => {
  return number1.length < 4 || number2.length < 4 || number3.length < 4 || number4.length < 4;
};

const checkMonth = (month) => {
  return Number(month) > 12;
};

const checkYear = (year) => {
  return Number(year) < 22;
};

const checkMonthAndYear = (month, year) => {
  const date = new Date();
  const currentMonth = date.getMonth() + 1;
  const currentYear = Number(date.getFullYear().toString().slice(2, 4));

  return Number(month) < currentMonth && Number(year) === currentYear;
};

const checkCVC = (cvc) => {
  return cvc.length < 3;
};

const checkCardInfo = ({ number1, number2, number3, number4, month, year, cvc }) => {
  validator([
    {
      checker: () => checkCardNumber(number1, number2, number3, number4),
      errorMsg: ERROR_MESSAGE.CARD_NUMBER,
    },
    {
      checker: () => checkMonth(month),
      errorMsg: ERROR_MESSAGE.MONTH,
    },
    {
      checker: () => checkYear(year),
      errorMsg: ERROR_MESSAGE.YEAR,
    },
    {
      checker: () => checkMonthAndYear(month, year),
      errorMsg: ERROR_MESSAGE.MONTH_AND_YEAR,
    },
    {
      checker: () => checkCVC(cvc),
      errorMsg: ERROR_MESSAGE.CVC,
    },
  ]);
};

export default checkCardInfo;
