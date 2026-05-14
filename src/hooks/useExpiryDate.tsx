import { useState } from 'react';
import type { DateError, MonthError, YearError } from '../types/errorTypes';
import type { CardExpiry, ExpireHandler } from '../types/cardStausTypes';
import { getExpiryDateChangeError, getMonthBlurError, getYearBlurError } from '../utils/error';

export function useExpiryDate(): [CardExpiry, ExpireHandler] {
  const [cardExpiryDate, setCardExpiryDate] = useState<string[]>(['', '']);
  const [cardExpiryDateErrorMode, setCardExpiryDateErrorMode] = useState<
    DateError | MonthError | YearError | 'normal' | ''
  >('');

  const handleCardExpiryDate = (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const next = [...cardExpiryDate];
    next[index] = e.target.value;
    const nextErrorMode = getExpiryDateChangeError(index, e.target.value);

    if (nextErrorMode !== 'normal') {
      setCardExpiryDateErrorMode(nextErrorMode);
      return;
    }

    setCardExpiryDate(next);
    setCardExpiryDateErrorMode(nextErrorMode);
  };

  const handleYearBlur = () => {
    const [month, year] = cardExpiryDate;

    setCardExpiryDateErrorMode(getYearBlurError(month, year));
  };

  const handleMonthBlur = () => {
    const [month] = cardExpiryDate;

    setCardExpiryDateErrorMode(getMonthBlurError(month));
  };

  return [
    {
      cardExpiryDate: cardExpiryDate,
      cardExpiryDateErrorMode: cardExpiryDateErrorMode,
    },
    {
      handleCardExpiryDate: handleCardExpiryDate,
      handleYearBlur: handleYearBlur,
      handleMonthBlur: handleMonthBlur,
    },
  ];
}
