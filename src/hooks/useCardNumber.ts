import { useState } from 'react';
import validate from '../utils/validate';

export type InitialCardNumberState = {
  value: string;
  isError: boolean;
};

const MAX_CARD_NUMBER_LENGTH = 16;

const useCardNumber = (initialStates: InitialCardNumberState[]) => {
  const [cardNumbers, setCardNumbers] = useState<InitialCardNumberState[]>(initialStates);
  const [cardBrand, setCardBrand] = useState<'none' | 'Visa' | 'MasterCard'>('none');

  const handleCardBrandImage = (totalCardNumbers: string) => {
    if (validate.isVisa(totalCardNumbers)) {
      setCardBrand('Visa');
      return;
    }

    if (validate.isMasterCard(totalCardNumbers)) {
      setCardBrand('MasterCard');
      return;
    }

    setCardBrand('none');
  };

  const cardNumbersChangeHandler = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const newValue = e.target.value;
    const isValid = newValue === '' || validate.isValidDigit(newValue);

    const newCardNumbers = cardNumbers.map((cardNumber, i) => {
      if (i === index) {
        return {
          value: isValid ? newValue : cardNumber.value,
          isError: !isValid,
        };
      }
      return cardNumber;
    });

    const totalCardNumbers = newCardNumbers.map((card) => card.value).join('');
    if (totalCardNumbers.length === MAX_CARD_NUMBER_LENGTH) {
      handleCardBrandImage(totalCardNumbers);
    }

    setCardNumbers(newCardNumbers);
  };

  return { cardNumbers, cardNumbersChangeHandler, cardBrand };
};

export default useCardNumber;
