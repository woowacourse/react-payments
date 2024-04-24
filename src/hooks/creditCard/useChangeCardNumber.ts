import { useState } from 'react';
import { isValidCardNumbersInput } from '@utils/validator';
import { ERROR_MESSAGE } from '@constants/index';

const useChangeCardNumber = () => {
  const [cardNumbers, setCardNumbers] = useState(['', '', '', '']);
  const [cardNumberError, setCardNumberError] = useState({ isError: false, errorMessage: '' });

  const handleCardNumberChange = (index: number, value: string) => {
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
