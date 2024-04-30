import { useState } from 'react';

import { INPUT_REGEX } from '../../constants/regex';

const useCardExpirationPeriodInput = (maxLength: number) => {
  const [period, setPeriod] = useState({ month: '', year: '' });
  const [periodErrors, setPeriodErrors] = useState({
    month: false,
    year: false,
    expired: false,
  });
  const [isPeriodAllFilled, setIsPeriodAllFilled] = useState(false);

  const validatePeriod = (value: string, type: string) => {
    const regex =
      type === 'month' ? INPUT_REGEX.period.month : INPUT_REGEX.period.year;
    return regex.test(value);
  };

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

    const newPeriod = { ...period, [type]: trimmedValue };
    setPeriod(newPeriod);

    const isValidPeriod = validatePeriod(trimmedValue, type);
    const isExpired = !validateExpiration(newPeriod.month, newPeriod.year);

    setPeriodErrors((prevErrors) => ({
      ...prevErrors,
      [type]: !isValidPeriod,
    }));

    setPeriodErrors((prevErrors) => ({ ...prevErrors, expired: isExpired }));

    if (
      !isPeriodAllFilled &&
      newPeriod.month.length === 2 &&
      newPeriod.year.length === 2
    ) {
      setIsPeriodAllFilled(true);
    }
  };

  return { period, periodErrors, handlePeriodChange, isPeriodAllFilled };
};

export default useCardExpirationPeriodInput;
