import type { Dispatch } from 'react';
import { useState } from 'react';
import type { CreditCard } from '../types/CreditCard';

export const useLocalStorage = (key: string) => {
  const [creditCards, setCreditCards] = useState<CreditCard[]>(
    JSON.parse(localStorage.getItem(key) ?? '[]'),
  );

  const internalSetCreditCards: Dispatch<CreditCard[]> = (nextCreditCards) => {
    localStorage.setItem(key, JSON.stringify(nextCreditCards));

    setCreditCards(nextCreditCards);
  };

  return { creditCards, internalSetCreditCards };
};
