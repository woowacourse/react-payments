import { useState } from 'react';
import type { CvcError } from '../types/errorTypes';
import type { Cvc, CvcHandler } from '../types/cardStatusTypes';
import { isNotNumber } from '../utils/util';

export function useCardCvc(): { cardCvc: Cvc; cvcHandler: CvcHandler } {
  const [cardCvc, setCardCvc] = useState<string>('');
  const [cardCvcErrorMode, setCardCvcErrorMode] = useState<CvcError | null>(null);

  const handleCardCvc = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isNotNumber(Number(e.target.value), 'notNumber', setCardCvcErrorMode)) {
      return;
    }

    setCardCvcErrorMode(null);
    setCardCvc(e.target.value);
  };

  const handleCvcBlur = () => {
    if (cardCvc.length < 3) {
      setCardCvcErrorMode('cvcCount');
      return;
    }
    setCardCvcErrorMode(null);
  };

  return {
    cardCvc: {
      cardCvc,
      cardCvcErrorMode,
    },
    cvcHandler: {
      handleCardCvc,
      handleCvcBlur,
    },
  };
}
