import { useEffect, useRef, useState } from 'react';
import { ExpirationKey, ExpirationType } from '../types';
import { INITIAL_EXPIRATION } from '../constants';

const useExpiration = () => {
  const [expiration, setExpiration] = useState<ExpirationType>(INITIAL_EXPIRATION);
  const handleExpirationChange = (field: ExpirationKey, value: string) => {
    const errorMessage = getErrorMessage(field, value);

    setExpiration((prev) => ({
      ...prev,
      [field]: { value, errorMessage }
    }));
  };

  const monthRef = useRef<HTMLInputElement>(null);
  const yearRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (expiration.month.value.length === 2) {
      yearRef.current?.focus();
    }
  }, [expiration.month.value]);

  return { expiration, handleExpirationChange, monthRef, yearRef };
};

const getErrorMessage = (field: 'month' | 'year', value: string) => {
  if (!Number.isInteger(+value)) {
    return '숫자만 입력 가능합니다.';
  }

  if (field === 'month') {
    return getMonthErrorMessage(value);
  }

  if (field === 'year') {
    return getYearErrorMessage(value);
  }
};

const getMonthErrorMessage = (value: string) => {
  if (value == '') {
    return '';
  }

  const month = Number(value);
  if (month < 1 || month > 12) {
    return '1부터 12 사이의 숫자를 입력해주세요.';
  }

  return '';
};

const getYearErrorMessage = (value: string) => {
  if (value !== '' && value.length !== 2) {
    return '2자리 숫자를 입력해주세요.';
  }
};

export default useExpiration;
