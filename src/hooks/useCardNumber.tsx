import { useState } from 'react';
import type { CardError } from '../types/errorTypes';
import type { CardStatus, CardHandler } from '../types/cardStausTypes';
import { isNotNumber, setEmptyBrand, setNoExist } from '../utils/util';

export function useCardNumber(): [CardStatus, CardHandler] {
  const [cardNumbers, setCardNumbers] = useState<string[]>(['', '', '', '']);
  const [cardNumberErrorMode, setCardNumberErrorMode] = useState<CardError | 'normal'>('normal');
  const [cardBrand, setCardBrand] = useState<string>('');

  const handleCardNumbers = (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const next = [...cardNumbers];
    next[index] = e.target.value;

    if (isNotNumber(Number(e.target.value), 'notNumber', setCardNumberErrorMode)) {
      return;
    }

    setEmptyBrand(next, setCardBrand);

    if (next[0].length === 1) {
      if (setNoExist(next, 'notExistBrand', setCardNumberErrorMode)) {
        return;
      }
      if (next[0].slice(0, 1) == '4') {
        setCardBrand('visa');
      }
    }

    if (next[0].length === 2 && next[0].slice(0, 1) !== '4') {
      if (setNoExist(next, 'notExistBrand', setCardNumberErrorMode)) {
        return;
      }
      setCardBrand('master');
    }

    setCardNumberErrorMode('normal');
    setCardNumbers(next);
  };

  const handleCardNumbersBlur = () => {
    if (cardNumbers.join('').length !== 16) {
      setCardNumberErrorMode('cardNumberCount');
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
