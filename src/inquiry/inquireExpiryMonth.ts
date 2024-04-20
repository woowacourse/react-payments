import CONDITION from '../constants/condition';

const inquireExpiryMonth = (expiryMonth: string) => {
  const isValidLength =
    expiryMonth.length === CONDITION.TEXT_LENGTH_MIN || expiryMonth.length === CONDITION.DATE_LENGTH_MAX;
  const isValidMonth = /^(0[1-9]|1[0-2])$/.test(expiryMonth);

  if (!isValidLength) {
    return '월(月) : 2자리로 입력해주세요';
  }

  if (!isValidMonth) {
    return '월(月) : 01월부터 12월 중 하나로 입력해주세요';
  }

  return '';
};

export default inquireExpiryMonth;
