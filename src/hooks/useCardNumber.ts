import { useState } from 'react';
import validate from '../utils/validate';

export type InitialCardNumberState = {
  value: string;
  isError: boolean;
};

const useCardNumber = (initialStates: InitialCardNumberState[]) => {
  const [cardNumbers, setCardNumbers] = useState<InitialCardNumberState[]>(initialStates);

  const cardNumbersChangeHandler = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const newValue = e.target.value;
    const isValid = newValue === '' || validate.isValidDigit(newValue);

    setCardNumbers(
      cardNumbers.map((cardNumber, i) => {
        if (i === index) {
          return {
            value: isValid ? newValue : cardNumber.value,
            isError: !isValid,
          };
        }
        return cardNumber;
      }),
    );
  };

  return { cardNumbers, cardNumbersChangeHandler };
};

export default useCardNumber;
