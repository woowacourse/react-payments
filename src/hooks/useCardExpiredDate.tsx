import { isValidMonth, isValidYear } from '../domain/checkIsValid';

import { BOUND } from '../constants/number';
import { ERROR_MESSAGE } from '../constants/message';
import useLastValidValue from './useLastValidValue';
import useValidateInput from './useValidateInput';

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
  const nowMonth = new Date().getMonth();
  const nowYear = new Date().getFullYear();
  const nowDate = new Date(nowYear, nowMonth);

  return inputDate < nowDate;
};

export default function useCardExpiredDate() {
  const monthValidateInput = useValidateInput(monthValidateInputProps);

  const yearValidateInput = useValidateInput(yearValidateInputProps);

  const isValidMonth = monthValidateInput.errorMessage === '';
  const isValidYear = yearValidateInput.errorMessage === '';

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

  const isValid = totalErrorMessage === undefined && isFullFilled;

  const initValue = () => {
    monthValidateInput.initValue();
    yearValidateInput.initValue();
  };
  return {
    expiredDate: [monthValidateInput.inputValue, yearValidateInput.inputValue],
    monthOnChange: monthValidateInput.onChange,
    yearOnChange: yearValidateInput.onChange,
    isValid,
    isValidMonth,
    isValidYear,
    isFullFilled,
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
  errorMessage: string | undefined;
  initValue: () => void;
}
