import { useState } from 'react';
import { REG_EXP } from '../constants/regexp';
import { REF_INDEX } from '../constants/refIndex';

const nowYear = new Date().getFullYear() % 2000;
const nowMonth = new Date().getMonth() + 1;

const getCurrentDateToString = () => {
  const month = String(nowMonth).length === 1 ? `0${nowMonth}` : `${nowMonth}`;

  const year = `${nowYear % 2000}`;
  return `${month}/${year}`;
};

const useExpiredDates = () => {
  const [expiredDates, setExpiredDates] = useState<Array<string>>(['', '']);
  const [expiredDatesError, setExpiredDatesError] = useState<string>('');

  const handleExpiredDates = (order: number, value: string) => {
    if (!checkExpiredDates(order, value)) {
      setError(
        `유효한 만료일을 ${getCurrentDateToString()}의 형태로 입력해주세요.`
      );
      return;
    }

    setError('');
    setState(order - REF_INDEX.lastCardNumbersOrder, value);
  };

  const checkExpiredDates = (order: number, value: string) => {
    const monthValue = order === 0 && value.length === 2;
    const yearValue = order === 1 && value.length === 2;

    if (REG_EXP.cardNumberLimit.test(value)) return false;
    if (monthValue && !REG_EXP.cardMonthLimit.test(value)) return false;
    if (yearValue && Number(value) < nowYear) return false;

    return true;
  };

  const setState = (order: number, value: string) => {
    setExpiredDates({ ...expiredDates, [order]: value });
  };

  const setError = (message: string) => {
    setExpiredDatesError(message);
  };

  return { expiredDates, expiredDatesError, handleExpiredDates };
};

export default useExpiredDates;
