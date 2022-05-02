import { useState, useMemo } from 'react';
import validator from '../validation';
import { expiredDateInputRegex } from '../constant/regularExpression';
import { INPUT_TYPE } from '../constant';
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

    if (isRemoveSlash(inputType, target.value)) {
      setExpiredDate({ month: expiredDate.month[0], year: '' });
      return;
    }

    const [month, year] = target.value.split(DATE_SEPARATOR);

    setExpiredDate({ month: month || '', year: year || '' });
  };

  const isRemoveSlash = (inputType, inputValue) => {
    return inputType === INPUT_TYPE.BACKWARD && inputValue.length === 2;
  };

  return {
    expiredDate,
    convertedExpiredDate,
    isValidExpiredDate,
    handleChangeExpiredDateInput,
  };
};

export default useExpiredDate;
