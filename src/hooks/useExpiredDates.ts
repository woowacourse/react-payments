import { useState } from 'react';
import { REG_EXP } from '../constants/regexp';
import { ExpiredDatesType } from '../types/general';

const nowYear = new Date().getFullYear() % 2000;
const nowMonth = new Date().getMonth() + 1;

const getCurrentDateToString = () => {
  const month = String(nowMonth).length === 1 ? `0${nowMonth}` : `${nowMonth}`;

  const year = `${nowYear % 2000}`;
  return `${month}/${year}`;
};

const useExpiredDates = () => {
  const [expiredDates, setExpiredDates] = useState<ExpiredDatesType>({
    0: '',
    1: '',
  });
  const [expiredDatesError, setExpiredDatesError] = useState<string>('');

  const isValidatedExpiredDates = (order: number, value: string) => {
    if (!isCheckExpiredDates(order, value)) {
      setExpiredDatesError(
        `유효한 만료일을 ${getCurrentDateToString()}의 형태로 입력해주세요.`
      );
      return false;
    }

    setExpiredDatesError('');
    setExpiredDates({ ...expiredDates, [order]: value });
    return true;
  };

  const isCheckExpiredDates = (order: number, value: string) => {
    const monthValue = order === 0 && value.length === 2;
    const yearValue = order === 1 && value.length === 2;

    if (REG_EXP.cardNumberLimit.test(value)) return false;
    if (monthValue && !REG_EXP.cardMonthLimit.test(value)) return false;
    if (yearValue && Number(value) < nowYear) return false;

    return true;
  };

  return { expiredDates, expiredDatesError, isValidatedExpiredDates };
};

export default useExpiredDates;
