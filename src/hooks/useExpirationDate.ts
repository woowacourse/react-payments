import { ChangeEvent, useEffect, useState } from 'react';
import { DATE, Date, DateItem } from '../types/date';
import useErrorMessages from './useErrorMessages';
import { checkExpired, checkValidMonth, checkValidYear, isValidDate } from '../utils/checkDate';

const initialDateValue = {
  [DATE.MONTH]: '',
  [DATE.YEAR]: '',
};

const useExpirationDate = () => {
  const [date, setDate] = useState<Date>(initialDateValue);
  const { errorMessages, setErrorMessages } = useErrorMessages<string>(Object.keys(date).length, '');
  const [isValid, setIsValid] = useState(false);

  const checkValidDate = ({ month = date.month, year = date.year }) => {
    const isExpiredDate = checkExpired(month, year);

    const monthErrorMessage = checkValidMonth(month, isExpiredDate);
    const yearErrorMessage = checkValidYear(year, isExpiredDate);

    setErrorMessages([
      { errorMessage: monthErrorMessage, index: 0 },
      { errorMessage: yearErrorMessage, index: 1 },
    ]);
  };

  const handleMonthChange = (e: ChangeEvent<HTMLInputElement>) => {
    const month = Number(e.target.value);

    if (month <= 1 || e.target.value.length >= 2) setDate({ ...date, month: e.target.value });
    else if (month >= 2 && month <= 9) setDate({ ...date, month: e.target.value.padStart(2, '0') });

    checkValidDate({ month: e.target.value });
  };

  const handleYearChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!isNaN(Number(e.target.value))) setDate({ ...date, year: e.target.value });
    checkValidDate({ year: e.target.value });
  };

  const handleExpirationDateChange = (item: DateItem) => (e: ChangeEvent<HTMLInputElement>) => {
    if (item === 'month') handleMonthChange(e);
    if (item === 'year') handleYearChange(e);
  };

  useEffect(() => {
    if (errorMessages.some((msg) => msg !== '')) {
      setIsValid(false);
      return;
    }

    setIsValid(isValidDate(date.month, date.year));
  }, [date.month, date.year, errorMessages]);

  return {
    value: date,
    handleExpirationDateChange,
    errorMessages,
    isValid,
  };
};

export default useExpirationDate;
