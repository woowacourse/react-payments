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

const isValidCardNumbers = (input: string) => {
  return !isNaN(Number(input));
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
};

const useCardNumbers = (): UseCardNumbersOptions => {
  const [cardNumbers, setCardNumbers] = useState(InitialCardNumber);
  const [isError, setIsError] = useState({
    firstNumber: false,
    secondNumber: false,
    thirdNumber: false,
    fourthNumber: false,
  });

  const handleCardNumbersChange =
    (target: CardNumbersKeys) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const isValid = isValidCardNumbers(event.target.value);
      if (isValid) {
        setIsError({ ...isError, [target]: false });
        setCardNumbers({ ...cardNumbers, [target]: event.target.value });
      } else {
        setIsError({ ...isError, [target]: true });
      }

      console.log(cardNumbers);
    };

  return { cardNumbers, setCardNumbers: handleCardNumbersChange, isError };
};
export default useCardNumbers;
