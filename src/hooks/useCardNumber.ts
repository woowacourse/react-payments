import { useState } from 'react';
import validate from '../utils/validate';
import { CardNumberState } from '../App';
import { CARD_NUMBER } from '../constants/cardSection';

const useCardNumber = (initialStates: CardNumberState[]) => {
  const [cardNumbers, setCardNumbers] = useState<CardNumberState[]>(initialStates);

  const cardNumbersChangeHandler = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    if (e.target.value !== '' && !validate.isValidDigit(e.target.value)) {
      setCardNumbers(
        cardNumbers.map((cardNumber, i) => {
          if (i === index) {
            return { ...cardNumber, isError: true, errorMessage: CARD_NUMBER.errorMessage };
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
            errorMessage: '',
          };
        }
        return cardNumber;
      }),
    );
  };

  const cardNumbersFocusOutHandler = (e: React.FocusEvent<HTMLInputElement>, index: number) => {
    if (e.target.value !== '' && !validate.isSatisfiedLength(4, e.target.value.length)) {
      setCardNumbers(
        cardNumbers.map((cardNumber, i) => {
          if (i === index) {
            return { ...cardNumber, isError: true, errorMessage: '4자리 숫자를 입력하세요.' };
          }
          return cardNumber;
        }),
      );
    }
  };

  return { cardNumbers, cardNumbersChangeHandler, cardNumbersFocusOutHandler };
};

export default useCardNumber;
