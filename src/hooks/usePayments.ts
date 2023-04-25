import { useContext } from 'react';
import { PaymentsContext } from '../context/PaymentsContext';
import type { CreditCard } from '../types/CreditCard';

export const usePayments = () => {
  const { creditCards, setCreditCards } = useContext(PaymentsContext);

  const addCreditCard = (newCard: CreditCard) => {
    setCreditCards([...creditCards, newCard]);
  };

  return { creditCards, addCreditCard };
};
