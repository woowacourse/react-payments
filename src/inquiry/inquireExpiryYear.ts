import CONDITION from '../constants/condition';

const inquireExpiryYear = (expiryYear: string) => {
  const isValidLength =
    expiryYear.length === CONDITION.TEXT_LENGTH_MIN || expiryYear.length === CONDITION.DATE_LENGTH_MAX;
  const isValidYear = Number(expiryYear) > 23 && Number(expiryYear) < 41;

  if (!isValidLength) {
    return '년도(年) : 2자리로 입력해주세요';
  }

  if (!isValidYear) {
    return '년도(年) : 24년도부터 40년도 중 하나로 입력해주세요';
  }

  return '';
};

export default inquireExpiryYear;
