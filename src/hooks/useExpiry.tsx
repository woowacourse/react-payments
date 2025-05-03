import { useEffect, useState } from 'react';
import { EXPIRYDATE_RULE } from '../constants/cardValidationRule';
import { EXPIRYDATE_ERROR } from '../constants/errorMessage';

type ValitationResult = {
  date: dateType;
  error: errorType[];
  updateDate: (value: string, dateName: string) => void;
  isComplete: boolean;
};

type dateType = {
  month: string;
  year: string;
};

type errorType = {
  isValidate: boolean;
  errorMessage: string;
};

const initialDate = [
  {
    isValidate: false,
    errorMessage: '',
  },
  {
    isValidate: false,
    errorMessage: '',
  },
];

export default function useExpiryDate(): ValitationResult {
  const [date, setDate] = useState<dateType>({ month: '', year: '' });
  const [error, setError] = useState<errorType[]>(initialDate);
  const [isComplete, setIsComplete] = useState(false);

  const updateError = (index: number, isError: boolean, message: string) => {
    setError((prev) => {
      prev[index] = {
        isValidate: isError,
        errorMessage: message,
      };
      return prev;
    });
  };

  const updateDate = (value: string, dateName: string) => {
    if (dateName === 'month') {
      if (value.length > EXPIRYDATE_RULE.DATE_MAX_LENGTH) return;

      setDate((prev) => ({ ...prev, month: value }));

      validateMonth(value);
    }

    if (dateName === 'year') {
      if (value.length > EXPIRYDATE_RULE.DATE_MAX_LENGTH) return;

      setDate((prev) => ({ ...prev, year: value }));

      validateYear(value);
    }
  };

  useEffect(() => {
    if (
      date.month.length === EXPIRYDATE_RULE.DATE_MAX_LENGTH &&
      date.year.length === EXPIRYDATE_RULE.DATE_MAX_LENGTH
    ) {
      setIsComplete(true);
    }
  }, [date]);

  const validateMonth = (value: string) => {
    if (value === '') {
      updateError(0, false, '');
      return;
    }

    if (!/^\d*$/.test(value)) {
      updateError(0, true, EXPIRYDATE_ERROR.MONTH_IS_NOT_A_NUMBER);
      return;
    }
    if (value.length < EXPIRYDATE_RULE.DATE_MAX_LENGTH) {
      updateError(0, true, EXPIRYDATE_ERROR.INVALID_MONTH_LENGTH_ERROR);
      return;
    }
    if (
      Number(value) < EXPIRYDATE_RULE.DATE_MONTH_MIN ||
      Number(value) > EXPIRYDATE_RULE.DATE_MONTH_MAX
    ) {
      updateError(0, true, EXPIRYDATE_ERROR.INVALID_MONTH);
      return;
    }
    updateError(0, false, '');
  };

  const validateYear = (value: string) => {
    if (value.length > EXPIRYDATE_RULE.DATE_MAX_LENGTH) return;
    setDate((prev) => ({ ...prev, year: value }));

    if (value === '') {
      updateError(1, false, '');
      return;
    }

    if (!/^\d*$/.test(value)) {
      updateError(1, true, EXPIRYDATE_ERROR.YEAR_IS_NOT_A_NUMBER);
      return;
    }
    if (value.length < EXPIRYDATE_RULE.DATE_MAX_LENGTH) {
      updateError(1, true, EXPIRYDATE_ERROR.INVALID_YEAR_LENGTH_ERROR);
      return;
    }
    if (Number(value) < EXPIRYDATE_RULE.DATE_YEAR_MIN) {
      updateError(1, true, EXPIRYDATE_ERROR.INVALID_YEAR);
      return;
    }
    updateError(1, false, '');
  };

  return { date, error, updateDate, isComplete };
}
