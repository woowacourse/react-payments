import { useState } from 'react';
import {
  MONTH_REGEX,
  NOT_A_NUMBER_REGEX,
  YEAR_REGEX,
} from '../constants/regex';

const useExpiredDate = () => {
  const [expiredDate, setExpiredDate] = useState<Record<number, string>>({
    0: '',
    1: '',
  });

  const checkExpiredDate = (order: number, value: string) => {
    if (NOT_A_NUMBER_REGEX.test(value)) return false;
    setExpiredDate({ ...expiredDate, [order]: value });
    return true;
  };

  const validateDate = (
    currentOrder: number,
    cardExpiredDateRefs: Record<number, React.RefObject<HTMLInputElement>>
  ) => {
    const currentRef = cardExpiredDateRefs[currentOrder];

    if (currentRef.current === null) return;

    if (currentRef.current.value.length !== 2) return;

    if (currentOrder === 1) {
      if (YEAR_REGEX.test(currentRef.current.value)) return;
      setExpiredDate({ ...expiredDate, 1: '' });
      return;
    }

    cardExpiredDateRefs[currentOrder + 1].current?.focus();

    if (!MONTH_REGEX.test(currentRef.current.value)) {
      setExpiredDate({ ...expiredDate, 0: '' });
      currentRef.current.focus();
      return;
    }
  };

  return { expiredDate, checkExpiredDate, validateDate };
};

export default useExpiredDate;
