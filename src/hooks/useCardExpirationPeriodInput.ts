import { useState } from 'react';

const useCardExpirationPeriodInput = (maxLength: number) => {
  const [period, setPeriod] = useState({ month: '', year: '' });
  const [periodErrors, setPeriodError] = useState({
    month: false,
    year: false,
    expired: false,
  });

  const validateMonth = (value: string) => {
    const inputMonth = parseInt(value, 10);
    return inputMonth >= 1 && inputMonth <= 12;
  };

  const validateYear = (value: string) => /^[0-9]{2}$/.test(value);

  const validateExpiration = (month: string, year: string) => {
    const currentYear = new Date().getFullYear() % 100;
    const currentMonth = new Date().getMonth() + 1;
    const inputYear = parseInt(year, 10);
    const inputMonth = parseInt(month, 10);

    return !(
      inputYear < currentYear ||
      (inputYear === currentYear && inputMonth < currentMonth)
    );
  };

  const handlePeriodChange = (type: 'month' | 'year', value: string) => {
    const trimmedValue = value.slice(0, maxLength);

    if (type === 'month') {
      const isValidMonth = validateMonth(trimmedValue);
      setPeriodError((prev) => ({ ...prev, month: !isValidMonth }));
    } else if (type === 'year') {
      const isValidYear = validateYear(trimmedValue);
      setPeriodError((prev) => ({ ...prev, year: !isValidYear }));
    }

    setPeriod((prev) => {
      const newPeriod = { ...prev, [type]: trimmedValue };

      const isExpired = !validateExpiration(newPeriod.month, newPeriod.year);
      setPeriodError((prevErrors) => ({ ...prevErrors, expired: isExpired }));

      return newPeriod;
    });
  };

  return { period, periodErrors, handlePeriodChange };
};

export default useCardExpirationPeriodInput;
