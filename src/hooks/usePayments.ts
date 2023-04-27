import { useContext } from 'react';
import { PaymentsContext } from '../context/PaymentsContext';
import type { CreditCard } from '../domain/CreditCard';

export const usePayments = () => {
  const context = useContext(PaymentsContext);

  if (context === null) {
    throw new Error('usePayments 훅을 사용하기 위해선 PaymentsProvider를 사용해야 합니다.');
  }

  const { creditCards, setCreditCards } = context;

  const addCreditCard = (newCard: CreditCard) => {
    setCreditCards([...creditCards, newCard]);
  };

  return { creditCards, addCreditCard };
};
