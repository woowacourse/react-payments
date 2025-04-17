import { useState } from 'react';
import useError from './useError';

type CardNumbersKeys =
  | 'firstNumber'
  | 'secondNumber'
  | 'thirdNumber'
  | 'fourthNumber';

export type CardNumbers = {
  firstNumber: string;
  secondNumber: string;
  thirdNumber: string;
  fourthNumber: string;
};

const INITIAL_CARD_NUMBER: CardNumbers = {
  firstNumber: '',
  secondNumber: '',
  thirdNumber: '',
  fourthNumber: '',
};

type IsError = {
  firstNumber: boolean;
  secondNumber: boolean;
  thirdNumber: boolean;
  fourthNumber: boolean;
};

const INITIAL_IS_ERROR: IsError = {
  firstNumber: false,
  secondNumber: false,
  thirdNumber: false,
  fourthNumber: false,
};

export type CardNumbersOptions = {
  cardNumbers: CardNumbers;
  setCardNumbers: (
    target: CardNumbersKeys
  ) => (event: React.ChangeEvent<HTMLInputElement>) => void;
  isError: IsError;
};

export type UseCardNumbersOptions = {
  errorMessage: string;
} & CardNumbersOptions;

const useCardNumbers = (): UseCardNumbersOptions => {
  const [cardNumbers, setCardNumbers] = useState(INITIAL_CARD_NUMBER);
  const { error, setErrorField, clearError } = useError(INITIAL_IS_ERROR);

  const isValidCardNumbers = (input: string) => {
    if (isNaN(Number(input))) {
      return { isError: true, errorMessage: '숫자만 입력 가능합니다' };
    }
    //TODO: focus out 시 카드번호 검증 로직 추가
    if (input.length > 4) {
      return { isError: true, errorMessage: '4자리 숫자만 입력 가능합니다' };
    }

    return { isError: false, errorMessage: '' };
  };

  const handleCardNumbersChange =
    (target: CardNumbersKeys) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { isError, errorMessage } = isValidCardNumbers(
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
