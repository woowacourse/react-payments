import { useState } from 'react';
import { isNumber } from '../utils/validator';

export const useCardNumbers = () => {
  const initialState = {
    first: '',
    second: '',
    third: '',
    fourth: '',
  };
  const [cardNumbers, setCardNumbers] = useState(initialState);

  const handleCardNumbersInput = ({ target: { value } }, key) => {
    isNumber(value) && setCardNumbers((prevNumbers) => ({ ...prevNumbers, [key]: value.trim() }));
  };

  return {
    cardNumbers: {
      value: cardNumbers,
      handleChange: handleCardNumbersInput,
      reset: () => setCardNumbers(initialState),
    },
  };
};
