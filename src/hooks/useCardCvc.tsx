import { useState } from 'react';
import type { CvcError } from '../types/errorTypes';
import type { Cvc, CvcHandler } from '../types/cardStausTypes';
import { isNotNumber } from '../utils/util';

export function useCardCvc(): [Cvc, CvcHandler] {
  const [cardCvc, setCardCvc] = useState<string>('');
  const [cardCvcErrorMode, setCardCvcErrorMode] = useState<CvcError | 'normal'>('normal');

  const handleCardCvc = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isNotNumber(Number(e.target.value), 'notNumber', setCardCvcErrorMode)) {
      return;
    }

    setCardCvcErrorMode('normal');
    setCardCvc(e.target.value);
  };

  const handleCvcBlur = () => {
    if (cardCvc.length < 3) {
      setCardCvcErrorMode('cvcCount');
      return;
    }
    setCardCvcErrorMode('normal');
  };

  return [
    {
      cardCvc,
      cardCvcErrorMode,
    },
    {
      handleCardCvc,
      handleCvcBlur,
    },
  ];
}
