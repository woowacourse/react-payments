import { useMemo, useState } from 'react';
import { CardExpiration } from '../types/card';
import { validateMonthRangeError, validateNumberError, validateYearLengthError } from '../utils/cardInputValidations';

export function useCardExpirationInput() {
  const [cardExpiration, setCardExpiration] = useState<CardExpiration>({ month: '', year: '' });

  const cardExpirationError = useMemo(() => {
    const errors: CardExpiration = {
      month: '',
      year: ''
    };

    if (cardExpiration.month !== '') {
      const numError = validateNumberError(cardExpiration.month);
      if (numError) errors.month = numError;

      const monthRangeError = validateMonthRangeError(cardExpiration.month);
      if (monthRangeError) errors.month = monthRangeError;
    }

    if (cardExpiration.year !== '') {
      const numError = validateNumberError(cardExpiration.year);
      if (numError) {
        errors.year = numError;
      } else {
        const yearLengthError = validateYearLengthError(cardExpiration.year);
        if (yearLengthError) errors.year = yearLengthError;
      }
    }

    return errors;
  }, [cardExpiration]);

  const handleCardExpirationChange = (key: keyof CardExpiration, value: string) => {
    setCardExpiration((prev) => ({ ...prev, [key]: value }));
  };

  return { cardExpiration, handleCardExpirationChange, cardExpirationError };
}
