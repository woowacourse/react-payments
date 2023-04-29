import { useContext } from 'react';
import { CreditCardsContext } from '../context/CreditCardsContext';
import type { CreditCard } from '../types/CreditCard';

export const useCreditCards = () => {
  const { creditCards, setCreditCards } = useContext(CreditCardsContext);

  const addCreditCard = (newCard: CreditCard) => {
    setCreditCards([...creditCards, newCard]);
  };

  return { creditCards, addCreditCard };
};
