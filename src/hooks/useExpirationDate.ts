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
    const { value } = e.target;

    const month = Number(value);

    if (month <= 1 || value.length >= 2) setDate({ ...date, month: value });
    else if (month >= 2 && month <= 9) setDate({ ...date, month: value.padStart(2, '0') });

    checkValidDate({ month: e.target.value });
  };

  const handleYearChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    if (!isNaN(Number(value))) setDate({ ...date, year: value });
    checkValidDate({ year: value });
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

  const reset = () => {
    setDate(initialDateValue);
  };

  return {
    value: date,
    handleExpirationDateChange,
    errorMessages,
    isValid,
    reset,
  };
};

export default useExpirationDate;
