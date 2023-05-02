import { useState } from 'react';
import { MONTH_DATA } from '../utils/constants';

const YEAR = new Date().getFullYear();
const YEAR_LAST = YEAR.toString().slice(2, 4);
const MONTH = new Date().getMonth() + 1;

const useValidExpireDate = () => {
  const [isCurrentYear, setIsCurrentYear] = useState(false);

  const isValidExpiredMonthFormat = (str: string) => {
    if (!MONTH_DATA.includes(str)) return 'INVALID';
    if (isCurrentYear && MONTH >= +str) return 'INVALID';
    return 'VALID';
  };

  const isValidExpiredYearFormat = (str: string) => {
    const strToNum = +str;

    if (strToNum >= +YEAR_LAST) {
      setIsCurrentYear(true);
      return 'VALID';
    }

    setIsCurrentYear(false);
    return 'INVALID';
  };

  return { isValidExpiredMonthFormat, isValidExpiredYearFormat };
};

export default useValidExpireDate;
