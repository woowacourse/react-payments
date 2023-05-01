import { ChangeEvent, useEffect, useState } from 'react';
import { useCardPaymentState } from '../components/context/CardPaymentContext';
import { isErrorForExpirationDate } from '../utils/isValidExpirationDate';

import { useInputError } from './useInputError';

type ExpirationErrorState = {
  isDateError: boolean;
  isMonthError: boolean;
  isYearError: boolean;
};

type ExpirationErrorSetState = {
  handleMonthError: (e: ChangeEvent<HTMLInputElement>) => void;
  handleYearError: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const useExpirationError = (): [ExpirationErrorState, ExpirationErrorSetState] => {
  const [isDateError, setDateError] = useState<boolean>(false);
  const [isMonthError, handleMonthError] = useInputError();
  const [isYearError, handleYearError] = useInputError();
  const state = useCardPaymentState();

  useEffect(() => {
    setDateError(isErrorForExpirationDate(state.cardExpirationDate));
  }, [state]);

  return [
    { isDateError, isMonthError, isYearError },
    { handleMonthError, handleYearError },
  ];
};
