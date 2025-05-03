import { useState } from 'react';
import { EXPIRYDATE_RULE } from '../constants/cardValidationRule';
import { EXPIRYDATE_ERROR } from '../constants/errorMessage';

type ValitationResult = {
  date: dateType;
  error: errorType[];
  validate: (value: string, dateName: string) => void;
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

  const updateDate = (index: number, isError: boolean, message: string) => {
    setError((prev) => {
      prev[index] = {
        isValidate: isError,
        errorMessage: message,
      };
      return prev;
    });
  };

  const validate = (value: string, dateName: string) => {
    if (dateName === 'month') {
      if (value.length > EXPIRYDATE_RULE.DATE_MAX_LENGTH) return;
      setDate((prev) => ({ ...prev, month: value }));

      if (value === '') {
        updateDate(0, false, '');
        return;
      }

      if (!/^\d*$/.test(value)) {
        updateDate(0, true, EXPIRYDATE_ERROR.MONTH_IS_NOT_A_NUMBER);
        return;
      }
      if (value.length < EXPIRYDATE_RULE.DATE_MAX_LENGTH) {
        updateDate(0, true, EXPIRYDATE_ERROR.INVALID_MONTH_LENGTH_ERROR);
        return;
      }
      if (
        Number(value) < EXPIRYDATE_RULE.DATE_MONTH_MIN ||
        Number(value) > EXPIRYDATE_RULE.DATE_MONTH_MAX
      ) {
        updateDate(0, true, EXPIRYDATE_ERROR.INVALID_MONTH);
        return;
      }
      updateDate(0, false, '');
    }

    if (dateName === 'year') {
      if (value.length > EXPIRYDATE_RULE.DATE_MAX_LENGTH) return;
      setDate((prev) => ({ ...prev, year: value }));

      if (value === '') {
        updateDate(1, false, '');
        return;
      }

      if (!/^\d*$/.test(value)) {
        updateDate(1, true, EXPIRYDATE_ERROR.YEAR_IS_NOT_A_NUMBER);
        return;
      }
      if (value.length < EXPIRYDATE_RULE.DATE_MAX_LENGTH) {
        updateDate(1, true, EXPIRYDATE_ERROR.INVALID_YEAR_LENGTH_ERROR);
        return;
      }
      if (Number(value) < EXPIRYDATE_RULE.DATE_YEAR_MIN) {
        updateDate(1, true, EXPIRYDATE_ERROR.INVALID_YEAR);
        return;
      }
      updateDate(1, false, '');
    }
  };

  return { date, error, validate };
}
