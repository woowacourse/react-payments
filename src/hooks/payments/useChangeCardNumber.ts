import { useState } from 'react';
import { isValidCardNumbersInput } from '@utils/validator';
import { ERROR_MESSAGE } from '@constants/index';

const initialState = { isSuccess: false, isError: [false, false, false, false], errorMessage: '' };

const useChangeCardNumber = () => {
  const [cardNumbers, setCardNumbers] = useState(['', '', '', '']);
  const [cardNumberState, setCardNumberState] = useState(initialState);

  const handleCardNumberChange = (index: number, value: string) => {
    if (!isValidCardNumbersInput(value)) {
      const newIsError = [...initialState.isError];
      newIsError[index] = true;
      setCardNumberState((prev) => ({
        ...prev,
        isError: newIsError,
        errorMessage: ERROR_MESSAGE.invalidCardNumberInput,
      }));
      return;
    }

    const newCardNumbers = [...cardNumbers];
    newCardNumbers[index] = value;

    if (newCardNumbers.every((num) => num.length === 4)) {
      setCardNumberState({ ...initialState, isSuccess: true });
    } else {
      setCardNumberState(initialState);
    }

    setCardNumbers(cardNumbers.map((num, i) => (i === index ? value : num)));
  };

  return { cardNumbers, cardNumberState, handleCardNumberChange };
};

export default useChangeCardNumber;
