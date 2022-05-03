import { useState, useMemo } from 'react';
import validator from '../validation';
import { expiredDateInputRegex } from '../constant/regularExpression';
import { DATE_SEPARATOR } from '../constant/mark';

const useExpiredDate = () => {
  const [expiredDate, setExpiredDate] = useState({ month: '', year: '' });

  const convertedExpiredDate = useMemo(() => {
    return expiredDate.month || expiredDate.year
      ? `${expiredDate.month}${expiredDate.month.length === 2 ? DATE_SEPARATOR : ''}${
          expiredDate.year
        }`
      : '';
  }, [expiredDate]);

  const isValidExpiredDate = useMemo(
    () => validator.validateExpiredDate(convertedExpiredDate),
    [expiredDate]
  );

  const handleChangeExpiredDateInput = ({ nativeEvent: { inputType, data }, target }) => {
    if (validator.isInvalidInputData(expiredDateInputRegex, data, inputType)) {
      return;
    }

    if (target.name === 'month') {
      setExpiredDate(prevState => ({ ...prevState, month: target.value }));
      return;
    }

    setExpiredDate(prevState => ({ ...prevState, year: target.value }));
  };

  return {
    expiredDate,
    convertedExpiredDate,
    isValidExpiredDate,
    handleChangeExpiredDateInput,
  };
};

export default useExpiredDate;
