import { useState } from 'react';
import { ERROR_MESSAGE, ONLY_NUMBER_PATTERN } from '../../../../constants';
import { CARD_PASSWORD_NUMBER_ERROR_MESSAGE, CARD_PASSWORD_NUMBER_MAX_LENGTH } from '../constants';

export const useControlledCardPasswordNumber = () => {
  const [isCardPasswordNextStep, setIsCardPasswordNextStep] = useState<boolean>(false);
  const [cardPassword, setCardPassword] = useState<string>('');
  const [cardPasswordErrorMessage, setCardPasswordErrorMessage] = useState<string>('');

  const getErrorMessage = (value: string) => {
    if (!ONLY_NUMBER_PATTERN.test(value)) {
      return ERROR_MESSAGE.onlyNumber;
    }

    if (value.length < CARD_PASSWORD_NUMBER_MAX_LENGTH) {
      return CARD_PASSWORD_NUMBER_ERROR_MESSAGE.minLength;
    }

    return '';
  };

  const handleCardPasswordInputChange = (value: string) => {
    setCardPassword((prev) => (prev = value));
    setCardPasswordErrorMessage((prev) => (prev = getErrorMessage(value)));
  };

  if (
    cardPassword.length === CARD_PASSWORD_NUMBER_MAX_LENGTH &&
    cardPasswordErrorMessage === '' &&
    !isCardPasswordNextStep
  )
    setIsCardPasswordNextStep(true);
  return { cardPassword, cardPasswordErrorMessage, isCardPasswordNextStep, handleCardPasswordInputChange };
};
