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
import { COMMON_ERROR_MESSAGE } from './message/commonErrorMessage';
import isInteger from './validate/isInteger';

const INITIAL_CARD_EXPIRATION_DATE: CardExpirationDate = {
  month: '',
  year: '',
};

const INITIAL_IS_ERROR: IsError = {
  month: false,
  year: false,
};

const MAX_INPUT_LENGTH = 2;
const MIN_YEAR = 0;
const MAX_YEAR = 99;
const MIN_MONTH = 1;
const MAX_MONTH = 12;
const ERROR_MESSAGE = {
  //유효기간이 지났습니다
  EXPIRED: '유효기간이 지났습니다',
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
      return { isError: true, errorMessage: COMMON_ERROR_MESSAGE.ONLY_NUMBER };

    if (input.length < MAX_INPUT_LENGTH)
      return { isError: false, errorMessage: '' };

    if (!isNumber(input) || !isInteger(input)) {
      return { isError: true, errorMessage: COMMON_ERROR_MESSAGE.ONLY_NUMBER };
    }

    if (!isValidStringLength({ value: input, maxLength: MAX_INPUT_LENGTH })) {
      return {
        isError: true,
        errorMessage:
          COMMON_ERROR_MESSAGE.ONLY_NUMBER_WITH_LENGTH(MAX_INPUT_LENGTH),
      };
    }

    if (target === 'month') {
      if (
        !isValidNumberRange({
          value: Number(input),
          min: MIN_MONTH,
          max: MAX_MONTH,
        })
      ) {
        return {
          isError: true,
          errorMessage: COMMON_ERROR_MESSAGE.ONLY_NUMBER_WITH_LENGTH_MIN_MAX(
            MIN_MONTH,
            MAX_MONTH
          ),
        };
      }

      if (Number(cardExpirationDate.year) === new Date().getFullYear() % 100) {
        if (Number(input) < Math.floor(new Date().getMonth() + 1)) {
          return { isError: true, errorMessage: ERROR_MESSAGE.EXPIRED };
        }
      }
    }

    if (target === 'year') {
      if (
        !isValidNumberRange({
          value: Number(input),
          min: MIN_YEAR,
          max: MAX_YEAR,
        })
      ) {
        return {
          isError: true,
          errorMessage: COMMON_ERROR_MESSAGE.ONLY_NUMBER_WITH_RANGE(
            MIN_YEAR,
            MAX_YEAR
          ),
        };
      }

      if (Number(input) < Math.floor(new Date().getFullYear() % 100)) {
        return { isError: true, errorMessage: ERROR_MESSAGE.EXPIRED };
      }

      if (Number(input) === Math.floor(new Date().getFullYear() % 100)) {
        if (
          cardExpirationDate.month !== '' &&
          Number(cardExpirationDate.month) < new Date().getMonth() + 1
        ) {
          return { isError: true, errorMessage: ERROR_MESSAGE.EXPIRED };
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

  const handleCardExpirationDateBlur = (target: CardExpirationDateKeys) => {
    clearError(target);
  };

  return {
    cardExpirationDate,
    setCardExpirationDate: handleCardExpirationDateChange,
    handleCardExpirationDateBlur,
    isError: error.isError,
    errorMessage: error.errorMessage,
  };
};
export default useCardExpirationDate;
