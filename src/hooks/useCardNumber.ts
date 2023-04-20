import { useState } from 'react';
import { formatCardNumber } from '../utils/util';

const useCardNumber = (initialState: string) => {
  const [cardNumber, setCardNumber] = useState(initialState);
  const [maskedNumber, setMaskedNumber] = useState(formatCardNumber(initialState));

  const handleCardNumber = (data: string, lastWord: string) => {
    setCardNumber((cardNumber) => cardNumber + lastWord);

    setMaskedNumber(() => formatCardNumber(cardNumber));
  };

  return [cardNumber, maskedNumber, handleCardNumber] as const;
};
export default useCardNumber;
