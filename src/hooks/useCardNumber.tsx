import { useState } from 'react';
import type { CardError } from '../types/errorTypes';
import type { CardStatus, CardHandler, CardBrandType } from '../types/cardStausTypes';
import {
  getCardBrand,
  getCardNumberLength,
  isNumericInput,
  isPossibleCardBrandPrefix,
} from '../utils/util';

export function useCardNumber(): [CardStatus, CardHandler] {
  const [cardNumbers, setCardNumbers] = useState<string[]>(['', '', '', '']);
  const [cardNumberErrorMode, setCardNumberErrorMode] = useState<CardError | 'normal' | ''>('');
  const [cardBrand, setCardBrand] = useState<CardBrandType>('unknown');

  const handleCardNumbers = (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const next = [...cardNumbers];
    next[index] = e.target.value;
    const nextCardNumber = next.join('');

    if (!isNumericInput(e.target.value)) {
      setCardNumberErrorMode('notNumber');
      return;
    }

    setCardNumbers(next);

    if (!isPossibleCardBrandPrefix(nextCardNumber)) {
      setCardBrand('unknown');
      setCardNumberErrorMode('notExistBrand');
      return;
    }

    const nextCardBrand = getCardBrand(nextCardNumber);

    setCardBrand(nextCardBrand);
    setCardNumberErrorMode('normal');
  };

  const handleCardNumbersBlur = () => {
    const cardNumber = cardNumbers.join('');
    const cardBrand = getCardBrand(cardNumber);

    if (cardNumber.length !== getCardNumberLength(cardBrand)) {
      setCardNumberErrorMode('cardNumberCount');
      return;
    }

    if (cardBrand === 'unknown') {
      return;
    }

    setCardNumberErrorMode('normal');
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
