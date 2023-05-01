import { ChangeEvent, useEffect, useState } from 'react';
import { useCardPaymentState } from './useContextHooks';
import { useCardPaymentState } from '../components/context/CardPaymentContext';

import { useInputError } from './useInputError';

type ExpirationErrorState = {
  isDataError: boolean;
  isError1: boolean;
  isError2: boolean;
};

type ExpirationErrorSetState = {
  handleError1: (e: ChangeEvent<HTMLInputElement>) => void;
  handleError2: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const useExpirationError = (): [ExpirationErrorState, ExpirationErrorSetState] => {
  const [isDataError, setDataError] = useState<boolean>(false);
  const [isError1, handleError1] = useInputError();
  const [isError2, handleError2] = useInputError();
  const state = useCardPaymentState();

  useEffect(() => {
    const today = new Date();
    const expirationDate = new Date(`20${[...state.cardExpirationDate].reverse().join('-')}`);

    if (today > expirationDate) {
      setDataError(true);
    } else {
      setDataError(false);
    }
  }, [state]);

  return [
    { isDataError, isError1, isError2 },
    { handleError1, handleError2 },
  ];
};
