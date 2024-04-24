import { useState } from 'react';

import { CARD_NUMBER } from '../constants/Condition';
import { isValidLength } from '../utils/validation';

const useValidatedCardNumbers = (defaultValue = ['', '', '', '']) => {
  const [cardNumbers, setCardNumbers] = useState(defaultValue);
  const [isValid, setIsValid] = useState([false, false, false, false]);

  const validateCardNumber = (cardNumber: string) => isValidLength(cardNumber, CARD_NUMBER.MAX_LENGTH);

  const handleCardNumbers = (newCardNumbers: string[]) => {
    const newIsValid = [...isValid];

    const newCardNumbersCopy = newCardNumbers.map((cardNumber, index) => {
      const isValid = validateCardNumber(cardNumber);
      newIsValid[index] = isValid;
      return isValid ? cardNumber : '';
    });

    setIsValid(newIsValid);
    setCardNumbers(newCardNumbersCopy);
  };

  return { cardNumbers, isCardNumbersValid: isValid, handleCardNumbers };
};

export default useValidatedCardNumbers;
