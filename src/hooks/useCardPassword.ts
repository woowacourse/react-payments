import { CARD_PASSWORD_ERROR } from '../constants';
import { useCardField } from './useCardField';

export const useCardPassword = () => {
  const {
    value: cardPassword,
    error: cardPasswordError,
    handleChange,
    reset: resetCardPassword,
    isValid: isCardPasswordValid,
    getErrorMessage: getCardPasswordErrorMessage,
  } = useCardField({
    requiredLength: 2,
    errorMessages: { emptyValue: CARD_PASSWORD_ERROR.emptyValue },
  });

  const handleCardPasswordChange = (value: string) => {
    handleChange(value);
  };

  return {
    cardPassword,
    cardPasswordError,
    handleCardPasswordChange,
    resetCardPassword,
    isCardPasswordValid,
    getCardPasswordErrorMessage,
  };
};
