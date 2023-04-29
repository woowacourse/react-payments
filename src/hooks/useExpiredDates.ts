import { useState } from 'react';

const useExpiredDates = () => {
  const [expiredDates, setExpiredDates] = useState<Array<string>>(['', '']);

  const isSetExpiredDates = (order: number, value: string) => {
    if (/[^0-9]/g.test(value)) return false;

    if (!/^0?[1-9]|1[0-2]$|/.test(value) && order === 0) {
      return false;
    }

    setExpiredDates({ ...expiredDates, [order]: value });
    return true;
  };

  return { expiredDates, isSetExpiredDates };
};

export default useExpiredDates;
