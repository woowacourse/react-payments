import { useState } from 'react';
import { isValidCardNumbersInput, isValidCardTypeInput } from '@utils/validator';
import { CARD, ERROR_MESSAGE } from '@constants/index';

const validCardPrefixes = Object.values(CARD.PREFIXES).flat();

const useChangeCardNumber = () => {
  const [cardNumbers, setCardNumbers] = useState(['', '', '', '']);
  const [cardNumberError, setCardNumberError] = useState({ isError: false, errorMessage: '' });

  const handleCardNumberChange = (index: number, value: string) => {
    if (index === 0 && !isValidCardTypeInput(value, validCardPrefixes)) {
      setCardNumberError({ isError: true, errorMessage: ERROR_MESSAGE.invalidCardType });
      return;
    }

    if (!isValidCardNumbersInput(value)) {
      setCardNumberError({ isError: true, errorMessage: ERROR_MESSAGE.invalidCardNumberInput });
      return;
    }

    setCardNumbers(cardNumbers.map((num, i) => (i === index ? value : num)));
    setCardNumberError({ isError: false, errorMessage: '' });
  };

  return { cardNumbers, cardNumberError, handleCardNumberChange };
};

export default useChangeCardNumber;
