import { useState } from 'react';
import useError from './useError';
import isValidStringLength from './validate/isValidStringLength';
import isNumber from './validate/isNumber';
import isValidNumberRange from './validate/isValidNumberRange';
import CardExpirationDate from '../types/CardExpirationDate';
import {
  CardExpirationDateKeys,
  CardExpirationDateOptions,
  IsError,
} from '../types/CardExpirationDateOptions';

const INITIAL_CARD_EXPIRATION_DATE: CardExpirationDate = {
  month: '',
  year: '',
};

const INITIAL_IS_ERROR: IsError = {
  month: false,
  year: false,
};

const useCardExpirationDate = (): CardExpirationDateOptions => {
  const [cardExpirationDate, setCardExpirationDate] = useState(
    INITIAL_CARD_EXPIRATION_DATE
  );
  const { error, setErrorField, clearError } = useError(INITIAL_IS_ERROR);

  const getCardExpirationDateValidationResult = (
    target: CardExpirationDateKeys,
    input: string
  ) => {
    if (input.length === 1 && !isNumber(input))
      return { isError: true, errorMessage: '숫자만 입력 가능합니다' };

    if (input.length < 2) return { isError: false, errorMessage: '' };

    if (!isNumber(input)) {
      return { isError: true, errorMessage: '숫자만 입력 가능합니다' };
    }

    if (!isValidStringLength({ value: input, maxLength: 2 })) {
      return { isError: true, errorMessage: '2자리 숫자만 입력 가능합니다' };
    }

    if (target === 'month') {
      if (!isValidNumberRange({ value: Number(input), min: 1, max: 12 })) {
        return {
          isError: true,
          errorMessage: '01 ~ 12 사이의 숫자만 입력 가능합니다',
        };
      }

      if (Number(cardExpirationDate.year) === new Date().getFullYear() % 100) {
        if (Number(input) < Math.floor(new Date().getMonth() + 1)) {
          return { isError: true, errorMessage: '유효기간이 지났습니다' };
        }
      }
    }

    if (target === 'year') {
      if (!isValidNumberRange({ value: Number(input), min: 0, max: 99 })) {
        return {
          isError: true,
          errorMessage: '00 ~ 99 사이의 숫자만 입력 가능합니다',
        };
      }

      if (Number(input) < Math.floor(new Date().getFullYear() % 100)) {
        return { isError: true, errorMessage: '유효기간이 지났습니다' };
      }

      if (Number(input) === Math.floor(new Date().getFullYear() % 100)) {
        if (
          cardExpirationDate.month !== '' &&
          Number(cardExpirationDate.month) < new Date().getMonth() + 1
        ) {
          return { isError: true, errorMessage: '유효기간이 지났습니다' };
        }
      }
    }

    return { isError: false, errorMessage: '' };
  };

  const handleCardExpirationDateChange =
    (target: CardExpirationDateKeys) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { isError, errorMessage } = getCardExpirationDateValidationResult(
        target,
        event.target.value.trim()
      );
      if (isError) {
        setErrorField(target, errorMessage);
        return;
      }

      clearError(target);
      setCardExpirationDate({
        ...cardExpirationDate,
        [target]: event.target.value.trim(),
      });
    };

  return {
    cardExpirationDate,
    setCardExpirationDate: handleCardExpirationDateChange,
    isError: error.isError,
    errorMessage: error.errorMessage,
  };
};
export default useCardExpirationDate;
