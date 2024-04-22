import { useState } from 'react';
import { ERROR_MESSAGE } from '../constants/messages';
import { CARD_EXPIRATION } from '../constants/conditions';
import Validation from '../utils/Validation';

export default function useChangeExpireDate() {
  const [expireDate, setExpireDate] = useState({ month: '', year: '' });
  const [expireMonthValid, setExpireMonthValid] = useState({ isValid: true, errorMessage: '' });
  const [expireYearValid, setExpireYearValid] = useState({ isValid: true, errorMessage: '' });

  const handleChangeDate = (month: string, year: string) => {
    const isMonthValid = validateExpireMonth(month);
    const isYearValid = validateExpireYear(year);

    if (month !== '') setExpireMonthValid(isMonthValid);
    if (year !== '') setExpireYearValid(isYearValid);

    if (isMonthValid.isValid && isYearValid.isValid && month !== '' && year !== '') {
      const expireDateValidationResult = validateExpireDate(month, year);

      if (!expireDateValidationResult.isValid) {
        setExpireMonthValid(expireDateValidationResult);
        setExpireYearValid(expireDateValidationResult);
      }
    }

    setExpireDate(() => {
      return { month, year };
    });
  };

  return {
    expireDate,
    expireMonthValid,
    expireYearValid,
    handleChangeDate,
  };
}

function validateExpireDate(month: string, year: string) {
  const currentMonth = new Date().getMonth() + 1;
  const currentYear = new Date().getFullYear() - 2000;

  const inputMonth = parseInt(month, 10);
  const inputYear = parseInt(year, 10);

  if (inputYear < currentYear || (inputYear === currentYear && inputMonth < currentMonth)) {
    return { isValid: false, errorMessage: ERROR_MESSAGE.INVALID_EXPIRATION_DATE_EXPIRED };
  }

  return { isValid: true, errorMessage: '' };
}

function validateExpireMonth(month: string) {
  if (!Validation.isNumeric(month) || !Validation.hasLength(month, CARD_EXPIRATION.MAX_LENGTH)) {
    return { isValid: false, errorMessage: ERROR_MESSAGE.INVALID_EXPIRATION_MONTH_LENGTH };
  }

  if (
    !Validation.isNumberInRange({
      min: CARD_EXPIRATION.MIN_MONTH_RANGE,
      max: CARD_EXPIRATION.MAX_MONTH_RANGE,
      number: Number(month),
    })
  ) {
    return { isValid: false, errorMessage: ERROR_MESSAGE.INVALID_EXPIRATION_MONTH_LENGTH };
  }

  return { isValid: true, errorMessage: '' };
}

function validateExpireYear(year: string) {
  if (!Validation.isNumeric(year) || !Validation.hasLength(year, CARD_EXPIRATION.MAX_LENGTH)) {
    return { isValid: false, errorMessage: ERROR_MESSAGE.INVALID_EXPIRATION_YEAR_LENGTH };
  }

  return { isValid: true, errorMessage: '' };
}
