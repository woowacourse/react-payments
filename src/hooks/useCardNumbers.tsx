import { useState } from 'react';

type CardNumbersKeys =
  | 'firstNumber'
  | 'secondNumber'
  | 'thirdNumber'
  | 'fourthNumber';

type CardNumbers = {
  firstNumber: '' | number;
  secondNumber: '' | number;
  thirdNumber: '' | number;
  fourthNumber: '' | number;
};

const InitialCardNumber: CardNumbers = {
  firstNumber: 1234,
  secondNumber: '',
  thirdNumber: '',
  fourthNumber: '',
};

const isError = {
  firstNumber: false,
  secondNumber: false,
  thirdNumber: false,
  fourthNumber: false,
};

type UseCardNumbersOptions = {
  cardNumbers: CardNumbers;
  setCardNumbers: (
    target: CardNumbersKeys
  ) => (event: React.ChangeEvent<HTMLInputElement>) => void;
  isError: typeof isError;
  errorMessage: string;
};

const useCardNumbers = (): UseCardNumbersOptions => {
  const [cardNumbers, setCardNumbers] = useState(InitialCardNumber);
  const [isError, setIsError] = useState({
    firstNumber: false,
    secondNumber: false,
    thirdNumber: false,
    fourthNumber: false,
  });
  const [errorMessage, setErrorMessage] = useState('');

  const isValidCardNumbers = (input: string) => {
    if (isNaN(Number(input))) {
      setErrorMessage('숫자만 입력 가능합니다');
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
        setCardNumbers({ ...cardNumbers, [target]: event.target.value });
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
