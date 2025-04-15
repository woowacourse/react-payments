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
const validateCardNumbers = (input: string) => {
  if (isNaN(Number(input))) {
    throw new Error('Invalid input type. Expected a number.');
  }
};

const useCardNumbers = (): [
  CardNumbers,
  (
    target: CardNumbersKeys
  ) => (event: React.ChangeEvent<HTMLInputElement>) => void
] => {
  const [cardNumbers, setCardNumbers] = useState(InitialCardNumber);

  const handleCardNumbersChange =
    (target: CardNumbersKeys) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      validateCardNumbers(event.target.value);

      setCardNumbers({ ...cardNumbers, [target]: event.target.value });
      console.log(cardNumbers);
    };

  return [cardNumbers, handleCardNumbersChange];
};

export default useCardNumbers;
