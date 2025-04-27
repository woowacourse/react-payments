import { useState } from 'react';
import useError from './useError';
import isNumber from './validate/isNumber';
import isValidStringLength from './validate/isValidStringLength';
import {
  CardNumbers,
  CardNumbersKeys,
  CardNumbersOptions,
  IsError,
} from '../types/CardNumbers';
import { COMMON_ERROR_MESSAGE } from './message/commonErrorMessage';
import isInteger from './validate/isInteger';

const INITIAL_CARD_NUMBER: CardNumbers = {
  firstNumber: '',
  secondNumber: '',
  thirdNumber: '',
  fourthNumber: '',
};

const INITIAL_IS_ERROR: IsError = {
  firstNumber: false,
  secondNumber: false,
  thirdNumber: false,
  fourthNumber: false,
};

const MAX_INPUT_LENGTH = 4;

const useCardNumbers = (): CardNumbersOptions => {
  const [cardNumbers, setCardNumbers] = useState(INITIAL_CARD_NUMBER);
  const { error, setErrorField, clearError } = useError(INITIAL_IS_ERROR);

  const getCardNumbersValidationResult = (input: string) => {
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

    return { isError: false, errorMessage: '' };
  };

  const handleCardNumbersChange =
    (target: CardNumbersKeys) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { isError, errorMessage } = getCardNumbersValidationResult(
        event.target.value.trim()
      );

      if (isError) {
        setErrorField(target, errorMessage);
        return;
      }

      clearError(target);
      setCardNumbers((prev) => ({
        ...prev,
        [target]: event.target.value.trim(),
      }));
    };

  const handleCardNumbersBlur = (target: CardNumbersKeys) => {
    clearError(target);
  };

  const resetCardNumbers = () => {
    setCardNumbers(INITIAL_CARD_NUMBER);
  };

  return {
    cardNumbers,
    setCardNumbers: handleCardNumbersChange,
    handleCardNumbersBlur,
    isError: error.isError,
    errorMessage: error.errorMessage,
    resetCardNumbers,
  };
};
export default useCardNumbers;
