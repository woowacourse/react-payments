import { CardExpirationDate, CardExpirationDateError } from '../../types/types';
import { useCardExpirationMonth } from './useCardExpirationMonth';
import { useCardExpirationYear } from './useCardExpirationYear';

export const useCardExpiration = () => {
  const {
    month,
    monthError,
    handleMonthChange,
    resetMonth,
    isMonthValid,
    getMonthErrorMessage,
  } = useCardExpirationMonth();

  const {
    year,
    yearError,
    handleYearChange,
    resetYear,
    isYearValid,
    getYearErrorMessage,
  } = useCardExpirationYear();

  const cardExpirationDate: CardExpirationDate = {
    month,
    year,
  };

  const cardExpirationDateError: CardExpirationDateError = {
    month: monthError,
    year: yearError,
  };

  const resetCardExpiration = () => {
    resetMonth();
    resetYear();
  };

  const isCardExpirationValid = () => {
    return isMonthValid() && isYearValid();
  };

  return {
    cardExpirationDate,
    cardExpirationDateError,
    handleCardExpirationChange: {
      month: handleMonthChange,
      year: handleYearChange,
    },
    resetCardExpiration,
    isCardExpirationValid,
    getMonthErrorMessage,
    getYearErrorMessage,
  };
};
