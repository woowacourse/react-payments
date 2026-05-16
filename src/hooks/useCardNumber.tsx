import { useState } from 'react';
import type { CardError } from '../types/errorTypes';
import type { CardStatus, CardHandler } from '../types/cardStausTypes';
import { getCardBrand } from '../utils/cardBrand';
import { getCardNumberError } from '../utils/error';
import { validateCardNumber } from '../utils/validate';

export function useCardNumber(): [CardStatus, CardHandler] {
  const [cardNumbers, setCardNumbers] = useState<string[]>(['', '', '', '']);
  const [cardNumberErrorMode, setCardNumberErrorMode] = useState<CardError | 'normal' | ''>('');
  const cardBrand = getCardBrand(cardNumbers.join(''));

  const handleCardNumbers = (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const next = [...cardNumbers];
    next[index] = e.target.value;
    const nextCardNumber = next.join('');
    const nextCardNumberError = validateCardNumber(nextCardNumber);

    if (nextCardNumberError === 'notNumber') {
      setCardNumberErrorMode(nextCardNumberError);
      return;
    }

    setCardNumbers(next);
    setCardNumberErrorMode(nextCardNumberError);
  };

  const validateCardNumbers = () => {
    const cardNumber = cardNumbers.join('');
    setCardNumberErrorMode(getCardNumberError(cardNumber));
  };

  return [
    {
      cardNumbers: cardNumbers,
      cardNumberErrorMode: cardNumberErrorMode,
      cardBrand: cardBrand,
    },
    {
      handleCardNumbers: handleCardNumbers,
      validateCardNumbers: validateCardNumbers,
    },
  ];
}
