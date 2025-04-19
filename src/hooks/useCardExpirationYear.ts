import { CARD_EXPIRATION, CARD_EXPIRATION_ERROR } from '../constants';
import { useCardField } from './useCardField';

export const useCardExpirationYear = () => {
  const {
    value: year,
    error: yearError,
    handleChange,
    reset: resetYear,
    isValid: isYearValid,
    getErrorMessage: getYearErrorMessage,
  } = useCardField({
    minValue: CARD_EXPIRATION.minYear,
    requiredLength: CARD_EXPIRATION.yearLength,
    errorMessages: {
      onlyNumbers: CARD_EXPIRATION_ERROR.onlyNumbers,
      invalidValue: CARD_EXPIRATION_ERROR.invalidYear,
    },
  });

  const handleYearChange = (value: string) => {
    handleChange(value);
  };

  return {
    year,
    yearError,
    handleYearChange,
    resetYear,
    isYearValid,
    getYearErrorMessage,
  };
};
