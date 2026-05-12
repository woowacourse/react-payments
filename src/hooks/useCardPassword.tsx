import { useState } from 'react';
import type { PasswordError } from '../types/errorTypes';
import type { CardPassword, CardPasswordHandler } from '../types/cardStausTypes';
import { isNotNumber } from '../utils/util';

export function useCardPassword(): [CardPassword, CardPasswordHandler] {
  const [cardPassword, setCardPassword] = useState<string>('');
  const [cardPasswordErrorMode, setCardPasswordErrorMode] = useState<PasswordError | null>(null);

  const handleCardPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isNotNumber(Number(e.target.value), 'notNumber', setCardPasswordErrorMode)) {
      return;
    }

    setCardPasswordErrorMode(null);
    setCardPassword(e.target.value);
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
