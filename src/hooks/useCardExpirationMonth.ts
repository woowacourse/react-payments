import { CARD_EXPIRATION, CARD_EXPIRATION_ERROR } from '../constants';
import { useCardField } from './useCardField';

export const useCardExpirationMonth = () => {
  const {
    value: month,
    error: monthError,
    handleChange,
    reset: resetMonth,
    isValid: isMonthValid,
    getErrorMessage: getMonthErrorMessage,
  } = useCardField({
    minValue: CARD_EXPIRATION.minMonth,
    maxValue: CARD_EXPIRATION.maxMonth,
    requiredLength: CARD_EXPIRATION.monthLength,
    errorMessages: {
      onlyNumbers: CARD_EXPIRATION_ERROR.onlyNumbers,
      invalidValue: CARD_EXPIRATION_ERROR.invalidMonth,
    },
  });

  const handleMonthChange = (value: string) => {
    handleChange(value);
  };

  return {
    month,
    monthError,
    handleMonthChange,
    resetMonth,
    isMonthValid,
    getMonthErrorMessage,
  };
};
