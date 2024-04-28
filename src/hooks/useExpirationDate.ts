import validate from '@/utils/validate';
import { RefObject, useState } from 'react';
import { MONTH, MAX_LENGTH } from '@/constants/cardSection';
import formatSingleDigitDate from '@/utils/formatSingleDigitDate';

const FIRST_SINGLE_DIGIT_DATE = 10;

type UseExpirationDateProps = {
  nextStepHandler: () => void;
  isActiveCurrentStep: boolean;
};

const useExpirationDate = ({ nextStepHandler, isActiveCurrentStep }: UseExpirationDateProps) => {
  const [month, setMonth] = useState('');
  const [monthError, setMonthError] = useState(false);
  const [year, setYear] = useState('');
  const [yearError, setYearError] = useState(false);

  const monthChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
    nextRef: RefObject<HTMLInputElement>,
  ) => {
    setMonthError(false);
    const value = e.target.value;

    if (Number(value) > MONTH.MAX || !validate.isValidDigit(value)) {
      setMonthError(true);
      setMonth('');
      return;
    }

    setMonth(value);

    if (value.length === MAX_LENGTH.MONTH) {
      nextRef.current?.focus();
    }
  };

  const yearChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMonthError(false);
    const value = e.target.value;

    if (!validate.isValidDigit(value)) {
      setYearError(true);
      setYear('');
      return;
    }

    setYear(value);

    if (value.length === MAX_LENGTH.YEAR && isActiveCurrentStep) {
      nextStepHandler();
    }
  };

  const handleYearKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      if (isActiveCurrentStep) {
        setYearError(false);
        nextStepHandler();
      }
    }
  };

  const handleMonthBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (Number(value) < FIRST_SINGLE_DIGIT_DATE) {
      setMonthError(false);
      setMonth(formatSingleDigitDate(value));
    }
  };

  const handleYearBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (Number(value) < FIRST_SINGLE_DIGIT_DATE) {
      setYearError(false);
      setYear(formatSingleDigitDate(value));
    }
  };

  return {
    month,
    monthChangeHandler,
    monthError,
    handleMonthBlur,
    year,
    yearChangeHandler,
    yearError,
    handleYearKeyDown,
    handleYearBlur,
  };
};

export default useExpirationDate;
