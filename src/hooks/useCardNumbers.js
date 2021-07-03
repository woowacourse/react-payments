import { useState } from 'react';
import { isNumber } from '../utils/validator';

export const useCardNumbers = () => {
  const [cardNumbers, setCardNumbers] = useState({
    first: '',
    second: '',
    third: '',
    fourth: '',
  });

  const handleCardNumbersInput = ({ target: { value } }, key) => {
    isNumber(value) && setCardNumbers((prevNumbers) => ({ ...prevNumbers, [key]: value.trim() }));
  };

  return {
    cardNumbers: {
      value: cardNumbers,
      handleChange: handleCardNumbersInput,
    },
  };
};
