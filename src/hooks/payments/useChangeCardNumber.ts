import { useState } from 'react';
import { isValidCardNumbersInput } from '@utils/validator';
import { ERROR_MESSAGE } from '@constants/index';

const initialCardNumberError = { isError: [false, false, false, false], errorMessage: '' };

const useChangeCardNumber = () => {
  const [cardNumbers, setCardNumbers] = useState(['', '', '', '']);
  const [cardNumberError, setCardNumberError] = useState({ isError: [false, false, false, false], errorMessage: '' });

  const handleCardNumberChange = (index: number, value: string) => {
    const newIsError = [...initialCardNumberError.isError];

    if (!isValidCardNumbersInput(value)) {
      newIsError[index] = true;
      setCardNumberError({ isError: newIsError, errorMessage: ERROR_MESSAGE.invalidCardNumberInput });
      return;
    }

    setCardNumbers(cardNumbers.map((num, i) => (i === index ? value : num)));
    setCardNumberError(initialCardNumberError);
  };

  return { cardNumbers, cardNumberError, handleCardNumberChange };
};

export default useChangeCardNumber;
