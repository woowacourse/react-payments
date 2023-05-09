import { ChangeEventHandler, useState } from 'react';
import { validateExpirationMonth, validateExpirationYear } from 'util/ValidateExpirationDate';
import { validateInput } from 'util/Validation';

export type ExpirationDateInputTypes = (
  onChangeMonth: ChangeEventHandler<HTMLInputElement>,
  onChangeYear: ChangeEventHandler<HTMLInputElement>,
) => {
  isMonthError: boolean;
  isYearError: boolean;
  month: {
    value: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
  };
  year: {
    value: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
  };
};

export const useExpirationDataInput: ExpirationDateInputTypes = (
  onChangeMonth: ChangeEventHandler<HTMLInputElement>,
  onChangeYear: ChangeEventHandler<HTMLInputElement>,
) => {
  const [isMonthError, setIsMonthError] = useState(false);
  const [isYearError, setIsYearError] = useState(false);
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  const handleMonthChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value } = e.target;
    if (validateInput(value)) {
      setIsMonthError(true);
      return;
    }

    validateExpirationMonth(value) ? setIsMonthError(false) : setIsMonthError(true);

    onChangeMonth(e);
    setMonth(value);
  };

  const handleYearChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value } = e.target;
    if (validateInput(value)) {
      setIsYearError(true);
      return;
    }
    validateExpirationYear(value) ? setIsYearError(false) : setIsYearError(true);
    onChangeYear(e);
    setYear(value);
  };

  return {
    isMonthError: isMonthError,
    isYearError: isYearError,
    month: {
      value: month,
      onChange: handleMonthChange,
    },
    year: {
      value: year,
      onChange: handleYearChange,
    },
  };
};
