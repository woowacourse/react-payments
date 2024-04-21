import { useState } from 'react';
import { isValidMonthInput, isValidYearInput } from '@utils/validator';
import { ERROR_MESSAGE } from '@constants/index';

const initialExpirationDate = { month: '', year: '' };
const initialExpirationDateError = { isError: { month: false, year: false }, errorMessage: '' };

const validators = {
  month: isValidMonthInput,
  year: isValidYearInput,
};

const errorMessages = {
  month: ERROR_MESSAGE.invalidMonthInput,
  year: ERROR_MESSAGE.invalidYearInput,
};

const useChangeExpirationDate = () => {
  const [expirationDate, setExpirationDate] = useState(initialExpirationDate);
  const [expirationDateError, setExpirationDateError] = useState({
    isError: { month: false, year: false },
    errorMessage: '',
  });

  const handleExpirationChange = (field: 'month' | 'year', value: string) => {
    // 유효성 검사 실패
    if (!validators[field](value)) {
      setExpirationDateError({
        isError: { ...initialExpirationDateError.isError, [field]: true },
        errorMessage: errorMessages[field],
      });

      return;
    }

    // 유효성 검사 통과
    setExpirationDate((prev) => ({ ...prev, [field]: value }));
    setExpirationDateError(initialExpirationDateError);
  };

  return { expirationDate, expirationDateError, handleExpirationChange };
};

export default useChangeExpirationDate;
