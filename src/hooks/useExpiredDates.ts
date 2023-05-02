import { useState } from 'react';
import { REG_EXP } from '../constants/regexp';

const nowYear = new Date().getFullYear() % 2000;

const useExpiredDates = () => {
  const [expiredDates, setExpiredDates] = useState<Array<string>>(['', '']);

  const isSetExpiredDates = (order: number, value: string) => {
    const monthValue = order === 0 && value.length === 2;
    const yearValue = order === 1 && value.length === 2;

    if (REG_EXP.cardNumberLimit.test(value)) return false;

    if (monthValue && !REG_EXP.cardMonthLimit.test(value)) return false;

    if (yearValue && Number(value) < nowYear) return false;

    setExpiredDates({ ...expiredDates, [order]: value });
    return true;
  };

  return { expiredDates, isSetExpiredDates };
};

export default useExpiredDates;
