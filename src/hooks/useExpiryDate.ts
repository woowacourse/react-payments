import { useState } from 'react';
import type { DateError, MonthError, YearError } from '../types/errorTypes';
import type { CardExpiry, ExpireHandler } from '../types/cardStausTypes';
import { isNotNumber } from '../utils/util';

export function useExpiryDate(): { cardExpiry: CardExpiry; expiryHandler: ExpireHandler } {
  const [cardExpiryDate, setCardExpiryDate] = useState<string[]>(['', '']);
  const [cardExpiryDateErrorMode, setCardExpiryDateErrorMode] = useState<
    DateError | MonthError | YearError | null
  >(null);

  const handleCardExpiryDate = (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const next = [...cardExpiryDate];
    next[index] = e.target.value;

    const errormode = index === 0 ? 'notMonthNumber' : 'notYearNumber';
    if (isNotNumber(Number(e.target.value), errormode, setCardExpiryDateErrorMode)) return;

    if (index === 0) {
      if (Number(next[index]) > 12 || next[index] === '00') {
        setCardExpiryDateErrorMode('notMonthRange');
        return;
      }
    }

    setCardExpiryDateErrorMode(null);
    setCardExpiryDate(next);
  };

  const handleYearBlur = () => {
    if (cardExpiryDate.join('').length === 0) {
      setCardExpiryDateErrorMode('emptyBoth');
      return;
    }
    if (cardExpiryDate[1].length < 2) {
      setCardExpiryDateErrorMode('emptyYear');
      return;
    }
    if (cardExpiryDate[0].length === 0) {
      setCardExpiryDateErrorMode('emptyMonth');
      return;
    }
    setCardExpiryDateErrorMode(null);
  };

  const handleMonthBlur = () => {
    if (cardExpiryDate[0].length === 0) {
      setCardExpiryDateErrorMode('emptyMonth');
      return;
    }

    setCardExpiryDateErrorMode(null);
  };

  return {
    cardExpiry: {
      cardExpiryDate,
      cardExpiryDateErrorMode,
    },
    expiryHandler: {
      handleCardExpiryDate,
      handleYearBlur,
      handleMonthBlur,
    },
  };
}
