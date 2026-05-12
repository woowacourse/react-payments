import { useState } from 'react';
import { DEFAULT_CARD_NUMBER_GROUP_LENGTHS } from '../constants/cardBrands';
import type { CardError } from '../types/errorTypes';
import type { CardStatus, CardHandler } from '../types/cardStausTypes';
import {
  getCardBrand,
  getCardNumberGroupLengths,
  hasPotentialCardBrand,
  isValidCardNumber,
} from '../utils/cardBrand';
import { isNotNumber } from '../utils/util';

function matchCardNumberGroupCount(cardNumbers: string[], cardBrand: CardStatus['cardBrand']) {
  const groupLengths = getCardNumberGroupLengths(cardBrand);
  const nextCardNumbers = cardNumbers.slice(0, groupLengths.length);

  while (nextCardNumbers.length < groupLengths.length) {
    nextCardNumbers.push('');
  }

  return nextCardNumbers;
}

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

    if (next[0] === '') {
      setCardBrand('');
      setCardNumberErrorMode(null);
      setCardNumbers(matchCardNumberGroupCount(next, ''));
      return;
    }

    if (cardNumber !== '' && !hasPotentialCardBrand(cardNumber)) {
      setCardNumberErrorMode('notExistBrand');
      setCardBrand('');
      setCardNumbers(matchCardNumberGroupCount(next, ''));
      return;
    }

    const nextCardBrand = getCardBrand(cardNumber);

    setCardBrand(nextCardBrand);
    setCardNumberErrorMode(null);
    setCardNumbers(matchCardNumberGroupCount(next, nextCardBrand));
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
