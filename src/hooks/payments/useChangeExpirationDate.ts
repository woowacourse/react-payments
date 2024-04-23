import { useState } from 'react';
import { isValidMonthInput, isValidYearInput } from '@utils/validator';
import { ERROR_MESSAGE } from '@constants/index';

const initialValue = { month: '', year: '' };
const initialState = { isSuccess: false, isError: { month: false, year: false }, errorMessage: '' };

const validators = {
  month: isValidMonthInput,
  year: isValidYearInput,
};

const errorMessages = {
  month: ERROR_MESSAGE.invalidMonthInput,
  year: ERROR_MESSAGE.invalidYearInput,
};

const useChangeExpirationDate = () => {
  const [expirationDate, setExpirationDate] = useState(initialValue);
  const [expirationDateState, setExpirationDateState] = useState(initialState);

  const handleExpirationDateChange = (field: 'month' | 'year', value: string) => {
    if (!validators[field](value)) {
      setExpirationDateState((prev) => ({
        ...prev,
        isError: { ...initialState.isError, [field]: true },
        errorMessage: errorMessages[field],
      }));
      return;
    }

    const newDate = { ...expirationDate, [field]: value };

    if (newDate.month.length > 0 && newDate.year.length === 2) {
      setExpirationDateState({ ...initialState, isSuccess: true });
    } else {
      setExpirationDateState(initialState);
    }

    setExpirationDate((prev) => ({ ...prev, [field]: value }));
  };

  return { expirationDate, expirationDateState, handleExpirationDateChange };
};

export default useChangeExpirationDate;
