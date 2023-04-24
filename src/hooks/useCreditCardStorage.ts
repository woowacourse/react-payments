import type { Dispatch } from 'react';
import { useState } from 'react';
import type { CreditCard } from '../types/CreditCard';

const STORAGE_KEY = 'creditCards' as const;

export const useCreditCardStorage = () => {
  const [creditCards, setCreditCards] = useState<CreditCard[]>(
    JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '[]'),
  );

  const internalSetCreditCards: Dispatch<CreditCard[]> = (nextCreditCards) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(nextCreditCards));

    setCreditCards(nextCreditCards);
  };

  return { creditCards, internalSetCreditCards };
};
