import { useState } from 'react';

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

const InitialCardNumber: CardNumbers = {
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

const InitialIsError: IsError = {
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
  const [cardNumbers, setCardNumbers] = useState(InitialCardNumber);
  const [isError, setIsError] = useState(InitialIsError);
  const [errorMessage, setErrorMessage] = useState('');

  const isValidCardNumbers = (input: string) => {
    if (isNaN(Number(input))) {
      setErrorMessage('숫자만 입력 가능합니다');
      return false;
    }
    //TODO: focus out 시 카드번호 검증 로직 추가
    if (input.length > 4) {
      setErrorMessage('4자리 숫자만 입력 가능합니다');
      return false;
    }

    return true;
  };

  const handleCardNumbersChange =
    (target: CardNumbersKeys) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const isValid = isValidCardNumbers(event.target.value);
      if (isValid) {
        setIsError({ ...isError, [target]: false });
        setErrorMessage('');
        setCardNumbers({
          ...cardNumbers,
          [target]: event.target.value,
        });
      } else {
        setIsError({ ...isError, [target]: true });
      }
    };

  return {
    cardNumbers,
    setCardNumbers: handleCardNumbersChange,
    isError,
    errorMessage,
  };
};
export default useCardNumbers;
