import { useMemo, useState } from 'react';
import { Expiration } from '../types/card';
import { validateMonthRangeError, validateNumberError, validateYearLengthError } from '../utils/cardInputValidations';

export function useCardExpirationInput() {
  const [expiration, setExpiration] = useState<Expiration>({ month: '', year: '' });

  const expirationError = useMemo(() => {
    const errors: Expiration = {
      month: '',
      year: ''
    };

    if (expiration.month !== '') {
      const numError = validateNumberError(expiration.month);
      if (numError) errors.month = numError;

      const monthRangeError = validateMonthRangeError(expiration.month);
      if (monthRangeError) errors.month = monthRangeError;
    }

    if (expiration.year !== '') {
      const numError = validateNumberError(expiration.year);
      if (numError) {
        errors.year = numError;
      } else {
        const yearLengthError = validateYearLengthError(expiration.year);
        if (yearLengthError) errors.year = yearLengthError;
      }
    }

    return errors;
  }, [expiration]);

  const handleExpirationChange = (key: keyof Expiration, value: string) => {
    setExpiration((prev) => ({ ...prev, [key]: value }));
  };

  return { expiration, handleExpirationChange, expirationError };
}
