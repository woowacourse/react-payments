import { useState } from 'react';
import type { PasswordError } from '../types/errorTypes';
import type { Password, PasswordHandler } from '../types/cardStausTypes';
import { isNumericInput } from '../utils/util';

export function useCardPassword(): [Password, PasswordHandler] {
  const [cardPassword, setCardPassword] = useState('');
  const [cardPasswordErrorMode, setCardPasswordErrorMode] = useState<PasswordError | 'normal'>(
    'normal',
  );

  const handleCardPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isNumericInput(e.target.value)) {
      setCardPasswordErrorMode('notNumber');
      return;
    }

    setCardPasswordErrorMode('normal');
    setCardPassword(e.target.value);
  };

  const handlePasswordBlur = () => {
    if (cardPassword.length < 2) {
      setCardPasswordErrorMode('passwordCount');
      return;
    }

    setCardPasswordErrorMode('normal');
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
