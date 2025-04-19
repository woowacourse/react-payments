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
import { COMMON_ERROR_MESSAGE } from './commonErrorMessage';

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
    if (!isNumber(input)) {
      return { isError: true, errorMessage: COMMON_ERROR_MESSAGE.ONLY_NUMBER };
    }
    //TODO: focus out 시 카드번호 검증 로직 추가
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
      setCardNumbers({
        ...cardNumbers,
        [target]: event.target.value.trim(),
      });
    };

  return {
    cardNumbers,
    setCardNumbers: handleCardNumbersChange,
    isError: error.isError,
    errorMessage: error.errorMessage,
  };
};
export default useCardNumbers;
