import { useState } from 'react';
import { ERROR_MESSAGE, ONLY_NUMBER_PATTERN } from '../../../constants';

export const useControlledCardPasswordNumber = () => {
  const [isCardPasswordNextStep, setIsCardPasswordNextStep] = useState<boolean>(false);
  const [cardPassword, setCardPassword] = useState<string>('');
  const [cardPasswordErrorMessage, setCardPasswordErrorMessage] = useState<string>('');

  const getErrorMessage = (value: string) => {
    if (!ONLY_NUMBER_PATTERN.test(value)) {
      return ERROR_MESSAGE.onlyNumber;
    }

    return '';
  };

  const handleCardPasswordInputChange = (value: string) => {
    setCardPassword((prev) => (prev = value));
    setCardPasswordErrorMessage((prev) => (prev = getErrorMessage(value)));
  };

  if (cardPassword.length === 2 && cardPasswordErrorMessage === '' && !isCardPasswordNextStep)
    setIsCardPasswordNextStep(true);
  return { cardPassword, cardPasswordErrorMessage, isCardPasswordNextStep, handleCardPasswordInputChange };
};
