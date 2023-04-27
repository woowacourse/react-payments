import { useContext } from 'react';
import { PaymentsContext } from '../context/PaymentsContext';
import type { CreditCard } from '../types/CreditCard';

export const usePayments = () => {
  const { creditCards, setCreditCards, creditCardForm, setCreditCardForm } =
    useContext(PaymentsContext);

  const addCreditCard = (newCard: CreditCard) => {
    setCreditCards([...creditCards, newCard]);
  };

  const setNewCreditCard = (newCard: CreditCard) => {
    setCreditCardForm(newCard);
  };

  return { creditCards, addCreditCard, creditCardForm, setNewCreditCard };
};
