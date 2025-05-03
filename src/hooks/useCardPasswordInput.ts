import { useMemo, useState } from 'react';
import { validateNumberError, validateCardPasswordLengthError } from '../utils/cardInputValidations';

export function useCardPasswordInput() {
  const [cardPassword, setCardPassword] = useState<string>('');

  const cardPasswordError = useMemo(() => {
    const numError = validateNumberError(cardPassword);
    if (numError) return numError;

    const cardPasswordLengthError = validateCardPasswordLengthError(cardPassword);
    if (cardPasswordLengthError) return cardPasswordLengthError;

    return '';
  }, [cardPassword]);

  const handleCardPasswordChange = (_: string, value: string) => {
    setCardPassword(value);
  };

  return { cardPassword, handleCardPasswordChange, cardPasswordError };
}
