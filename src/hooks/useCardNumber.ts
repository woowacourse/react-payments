import { useState } from 'react';
import { InitialCardNumberState } from '../App';
import validate from '../utils/validate';

const useCardNumber = (initialStates: InitialCardNumberState[]) => {
  const [cardNumbers, setCardNumbers] = useState<InitialCardNumberState[]>(initialStates);

  const cardNumbersChangeHandler = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    if (e.target.value !== '' && !validate.isValidDigit(e.target.value)) {
      setCardNumbers(
        cardNumbers.map((cardNumber, i) => {
          if (i === index) {
            return {
              ...cardNumber,
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
