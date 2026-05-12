import { useState } from 'react';
import type { PasswordError } from '../types/errorTypes';
import type { CardPassword, CardPasswordHandler } from '../types/cardStausTypes';
import { isNotNumber } from '../utils/util';

export function useCardPassword(): [CardPassword, CardPasswordHandler] {
  const [cardPassword, setCardPassword] = useState<string>('');
  const [cardPasswordErrorMode, setCardPasswordErrorMode] = useState<PasswordError | null>(null);

  const handleCardPassword = (value: string) => {
    if (isNotNumber(Number(value), 'notNumber', setCardPasswordErrorMode)) {
      return;
    }

    setCardPasswordErrorMode(null);
    setCardPassword(value);
  };

  const handlePasswordBlur = () => {
    if (cardPassword.length < 2) {
      setCardPasswordErrorMode('passwordCount');
      return;
    }
    setCardPasswordErrorMode(null);
  };

  return [
    {
      cardPassword,
      cardPasswordErrorMode,
    },
    {
      handleCardPassword,
      handlePasswordBlur,
    },
  ];
}
