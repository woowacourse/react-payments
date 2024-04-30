import { isValidMonth, isValidYear } from '../../domain/checkIsValid';

import { BOUND } from '../../constants/number';
import { ERROR_MESSAGE } from '../../constants/message';
import useLastValidValue from '../useLastValidValue';
import { useState } from 'react';
import useValidateInput from '../useValidateInput';

const monthValidateInputProps = {
  validatorPropsArray: [
    {
      checkIsValid: isValidMonth,
      errorMessage: ERROR_MESSAGE.wrongMonth,
    },
  ],
};

const yearValidateInputProps = {
  validatorPropsArray: [
    {
      checkIsValid: isValidYear,
      errorMessage: ERROR_MESSAGE.wrongYear,
    },
  ],
};

const checkIsExpired = (month: string, year: string) => {
  const inputMonth = Number(month);
  const inputYear = Number(year) + 2000;
  const inputDate = new Date(inputYear, inputMonth);
  const nowMonth = new Date().getMonth() + 1;
  const nowYear = new Date().getFullYear();
  const nowDate = new Date(nowYear, nowMonth);

  return inputDate < nowDate;
};

export default function useCardExpiredDate() {
  const monthValidateInput = useValidateInput(monthValidateInputProps);

  const yearValidateInput = useValidateInput(yearValidateInputProps);

  const [wasChangedMonth, setWasChangedMonth] = useState(false);
  const [wasChangedYear, setWasChangedYear] = useState(false);

  const isValidMonth =
    monthValidateInput.errorMessage === '' && wasChangedMonth;
  const isValidYear = yearValidateInput.errorMessage === '' && wasChangedYear;

  const isExpired = checkIsExpired(
    monthValidateInput.inputValue,
    yearValidateInput.inputValue
  );

  const isFullFilled =
    monthValidateInput.inputValue.length ===
      BOUND.cardExpiredMonthStringUpper &&
    yearValidateInput.inputValue.length === BOUND.cardExpiredYearStringUpper;

  const isFullFilledAndExpired = isFullFilled && isExpired;
  const isFullFilledAndExpiredErrorMessage = isFullFilledAndExpired
    ? ERROR_MESSAGE.wrongExpiredDate
    : '';

  const totalErrorMessage = useLastValidValue({
    checkValues: [
      monthValidateInput.errorMessage,
      yearValidateInput.errorMessage,
      isFullFilledAndExpiredErrorMessage,
    ],
    invalidValues: [''],
  });

  const isValid =
    totalErrorMessage === undefined && wasChangedMonth && wasChangedYear;

  const initValue = () => {
    monthValidateInput.initValue();
    yearValidateInput.initValue();
    setWasChangedMonth(false);
    setWasChangedYear(false);
  };

  return {
    expiredDate: [monthValidateInput.inputValue, yearValidateInput.inputValue],
    monthOnChange: (event: React.ChangeEvent<HTMLInputElement>) => {
      setWasChangedMonth(true);
      monthValidateInput.onChange(event);
    },
    yearOnChange: (event: React.ChangeEvent<HTMLInputElement>) => {
      setWasChangedYear(true);
      yearValidateInput.onChange(event);
    },
    isValid,
    isValidMonth,
    isValidYear,
    isFullFilled,
    wasChangedMonth,
    wasChangedYear,
    errorMessage: totalErrorMessage,
    initValue,
  };
}

export interface UseCardExpiredDate {
  expiredDate: string[];
  monthOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  yearOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isValid: boolean;
  isValidMonth: boolean;
  isValidYear: boolean;
  isFullFilled: boolean;
  wasChangedMonth: boolean;
  wasChangedYear: boolean;
  errorMessage: string | undefined;
  initValue: () => void;
}
