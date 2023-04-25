import { useState } from 'react';
import type { CardNumber } from '../../../domain/types/card';

const useCardNumber = (initialState = ['', '', '', '']) => {
  const [cardNumber, _setCardNumber] = useState<CardNumber>(initialState as CardNumber);

  const setCardNumber = (index: number, value: string) => {
    const newCardNumber = [...cardNumber.slice(0, index), value, ...cardNumber.slice(index + 1)];
    _setCardNumber(newCardNumber as CardNumber);
  };

  return { cardNumber, setCardNumber };
};

export default useCardNumber;
