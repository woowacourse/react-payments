import { useState } from 'react';
import { REG_EXP } from '../constants/regexp';

const useExpiredDates = () => {
  const [expiredDates, setExpiredDates] = useState<Array<string>>(['', '']);

  const isSetExpiredDates = (order: number, value: string) => {
    if (REG_EXP.cardNumberLimit.test(value)) return false;

    setExpiredDates({ ...expiredDates, [order]: value });
    return true;
  };

  return { expiredDates, isSetExpiredDates };
};

export default useExpiredDates;
