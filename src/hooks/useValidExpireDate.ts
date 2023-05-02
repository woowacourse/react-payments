import { useState } from 'react';

import { MONTH, MONTH_DATA, YEAR_LAST } from '../utils/constants';

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
