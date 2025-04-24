import { useRef, useState } from 'react';
import { ExpirationKey, ExpirationType } from '../types';
import { INITIAL_EXPIRATION } from '../constants';
import { isNumber } from '../utils/isNumber';

export const ERROR_MESSAGES = {
  month: {
    ONLY_NUMBER: '숫자만 입력 가능합니다.',
    INVALID_RANGE: '1부터 12 사이의 숫자를 입력해주세요.'
  },
  year: {
    ONLY_NUMBER: '숫자만 입력 가능합니다.',
    INVALID_LENGTH: '2자리 숫자를 입력해주세요.'
  }
};

export const EXPIRATION_RULES = {
  MONTH_LENGTH: 2,
  YEAR_LENGTH: 2,
  MIN_MONTH: 1,
  MAX_MONTH: 12
};

const useExpiration = () => {
  const [expiration, setExpiration] = useState<ExpirationType>(INITIAL_EXPIRATION);

  const inputRef = {
    month: useRef<HTMLInputElement>(null),
    year: useRef<HTMLInputElement>(null)
  };

  const handleExpirationChange = (field: ExpirationKey, value: string) => {
    const errorMessage = getErrorMessage(field, value);

    if (field === 'month' && value.length === EXPIRATION_RULES.MONTH_LENGTH) {
      inputRef.year.current?.focus();
    }

    if (!isNumber(value) && value !== '') {
      return;
    }

    setExpiration((prev) => ({
      ...prev,
      [field]: { value, errorMessage }
    }));
  };

  return { expiration, handleExpirationChange, inputRef };
};

const getErrorMessage = (field: 'month' | 'year', value: string) => {
  if (field === 'month') {
    return getMonthErrorMessage(value);
  }

  if (field === 'year') {
    return getYearErrorMessage(value);
  }
};

const getMonthErrorMessage = (value: string) => {
  const month = Number(value);
  if (month < EXPIRATION_RULES.MIN_MONTH || month > EXPIRATION_RULES.MAX_MONTH) {
    return ERROR_MESSAGES.month.INVALID_RANGE;
  }
};

const getYearErrorMessage = (value: string) => {
  if (value.length !== EXPIRATION_RULES.YEAR_LENGTH) {
    return ERROR_MESSAGES.year.INVALID_LENGTH;
  }
};

export default useExpiration;
