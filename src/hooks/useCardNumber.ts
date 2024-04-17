import { useState } from 'react';
import { InitialState } from '../App';

const useCardNumber = (initialStates: InitialState[]) => {
  const [cardNumbers, setCardNumbers] = useState<InitialState[]>(initialStates);

  const cardNumbersChangeHandler = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    if (e.target.value === 'a') {
      setCardNumbers(
        cardNumbers.map((cardNumber, i) => {
          if (i === index) {
            return {
              value: e.target.value,
              isError: true,
            };
          }
          return cardNumber;
        }),
      );
      return;
    }

    return setCardNumbers(
      cardNumbers.map((cardNumber, i) => {
        if (i === index) {
          return {
            value: e.target.value,
            isError: false,
          };
        }
        return cardNumber;
      }),
    );
  };

  return { cardNumbers, cardNumbersChangeHandler };
};

export default useCardNumber;
