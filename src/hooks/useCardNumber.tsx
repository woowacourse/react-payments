import { useState } from 'react';
import {
  DEFAULT_CARD_NUMBER_GROUP_LENGTHS,
  getCardBrand,
  hasPotentialCardBrand,
  isValidCardNumber,
  splitCardNumberByBrand,
} from '../constants/cardBrands';
import type { CardError } from '../types/errorTypes';
import type { CardStatus, CardHandler } from '../types/cardStausTypes';
import { isNotNumber } from '../utils/util';

export function useCardNumber(): [CardStatus, CardHandler] {
  const [cardNumbers, setCardNumbers] = useState<string[]>(
    DEFAULT_CARD_NUMBER_GROUP_LENGTHS.map(() => ''),
  );
  const [cardNumberErrorMode, setCardNumberErrorMode] = useState<CardError | null>(null);
  const [cardBrand, setCardBrand] = useState<CardStatus['cardBrand']>('');

  const handleCardNumbers = (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const next = [...cardNumbers];
    next[index] = e.target.value;
    const cardNumber = next.join('');

    if (isNotNumber(Number(e.target.value), 'notNumber', setCardNumberErrorMode)) {
      return;
    }

    if (!hasPotentialCardBrand(cardNumber)) {
      setCardNumberErrorMode('notExistBrand');
      return;
    }

    const nextCardBrand = getCardBrand(cardNumber);

    setCardBrand(nextCardBrand);
    setCardNumberErrorMode(null);
    setCardNumbers(splitCardNumberByBrand(cardNumber, nextCardBrand));
  };

  const handleCardNumbersBlur = () => {
    if (cardNumbers.join('').length === 0) {
      setCardNumberErrorMode('cardNumberCount');
      return;
    }
    if (cardBrand === '') {
      setCardNumberErrorMode('notExistBrand');
      return;
    }
    if (!isValidCardNumber(cardNumbers, cardBrand)) {
      setCardNumberErrorMode('cardNumberCount');
      return;
    }
    setCardNumberErrorMode(null);
  };

  return [
    {
      cardNumbers: cardNumbers,
      cardNumberErrorMode: cardNumberErrorMode,
      cardBrand: cardBrand,
    },
    {
      handleCardNumbers: handleCardNumbers,
      handleCardNumbersBlur: handleCardNumbersBlur,
    },
  ];
}
