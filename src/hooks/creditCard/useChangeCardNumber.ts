import { useState } from 'react';
import { isValidCardNumbersInput, isValidCardTypeInput } from '../../utils/validator/inputField/cardNumbers';
import ERROR_MESSAGE from '../../constants/errorMessage';
import CARD from '../../constants/card';

const validCardPrefixes = Object.values(CARD.PREFIXES).flat();

const useChangeCardNumber = () => {
  const [cardNumbers, setCardNumbers] = useState(['', '', '', '']);
  const [cardNumberError, setCardNumberError] = useState({
    isError: false,
    errorMessage: '',
  });

  const handleCardNumberChange = (index: number, value: string) => {
    if (index === 0 && !isValidCardTypeInput(value, validCardPrefixes)) {
      setCardNumberError({
        isError: true,
        errorMessage: ERROR_MESSAGE.invalidCardType,
      });

      return;
    }

    if (!isValidCardNumbersInput(value)) {
      setCardNumberError({
        isError: true,
        errorMessage: ERROR_MESSAGE.invalidCardNumberInput,
      });

      return;
    }

    const newParts = [...cardNumbers];

    newParts[index] = value;

    setCardNumbers(newParts);
    setCardNumberError({
      isError: false,
      errorMessage: '',
    });
  };

  return { cardNumbers, cardNumberError, handleCardNumberChange };
};

export default useChangeCardNumber;
