import { useState } from 'react';

type CardExpirationDateKeys = 'month' | 'year';

export type CardExpirationDate = {
  month: string;
  year: string;
};

const INITIAL_CARD_EXPIRATION_DATE: CardExpirationDate = {
  month: '',
  year: '',
};

type IsError = {
  month: boolean;
  year: boolean;
};

const INITIAL_IS_ERROR: IsError = {
  month: false,
  year: false,
};

export type useCardExpirationDateOptions = {
  cardExpirationDate: CardExpirationDate;
  setCardExpirationDate: (
    target: CardExpirationDateKeys
  ) => (event: React.ChangeEvent<HTMLInputElement>) => void;
  isError: IsError;
  errorMessage: string;
};

const useCardExpirationDate = (): useCardExpirationDateOptions => {
  const [cardExpirationDate, setCardExpirationDate] = useState(
    INITIAL_CARD_EXPIRATION_DATE
  );
  const [isError, setIsError] = useState(INITIAL_IS_ERROR);
  const [errorMessage, setErrorMessage] = useState('');

  const isValidCardExpirationDateChange = (
    target: CardExpirationDateKeys,
    input: string
  ) => {
    if (input.length < 2) return true;

    if (isNaN(Number(input))) {
      setErrorMessage('숫자만 입력 가능합니다');
      return false;
    }

    if (input.length > 2) {
      setErrorMessage('2자리 숫자만 입력 가능합니다');
      return false;
    }

    if (target === 'month') {
      if (Number(input) < 1 || Number(input) > 12) {
        setErrorMessage('01 ~ 12 사이의 숫자만 입력 가능합니다');
        return false;
      }

      if (Number(cardExpirationDate.year) === new Date().getFullYear() % 100) {
        if (Number(input) < Math.floor(new Date().getMonth() + 1)) {
          setErrorMessage('유효기간이 지났습니다');
          return false;
        }
      }
    }

    if (target === 'year') {
      if (input.length < 2) return true;

      if (Number(input) < 0 || Number(input) > 99) {
        setErrorMessage('00 ~ 99 사이의 숫자만 입력 가능합니다');
        return false;
      }

      if (Number(input) < Math.floor(new Date().getFullYear() % 100)) {
        setErrorMessage('유효기간이 지났습니다');
        return false;
      }

      if (Number(input) === Math.floor(new Date().getFullYear() % 100)) {
        if (Number(cardExpirationDate.month) < new Date().getMonth() + 1) {
          setErrorMessage('유효기간이 지났습니다');
          return false;
        }
      }
    }

    return true;
  };

  const handleCardExpirationDateChange =
    (target: CardExpirationDateKeys) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const isValid = isValidCardExpirationDateChange(
        target,
        event.target.value.trim()
      );
      if (isValid) {
        setIsError({ ...isError, [target]: false });
        setErrorMessage('');
        setCardExpirationDate({
          ...cardExpirationDate,
          [target]: event.target.value.trim(),
        });
        return;
      }
      setIsError({ ...isError, [target]: true });
    };

  return {
    cardExpirationDate,
    setCardExpirationDate: handleCardExpirationDateChange,
    isError,
    errorMessage,
  };
};
export default useCardExpirationDate;
