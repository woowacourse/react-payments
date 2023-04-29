import { useContext } from 'react';
import { ResisteringCreditCardContext } from '../context/ResisteringCreditCardContext';

import type { CreditCard } from '../types/CreditCard';

export const useResisteringCreditCard = () => {
  const { resisteringCreditCard, setResisteringCreditCard } = useContext(
    ResisteringCreditCardContext,
  );

  const changeResisteringCreditCard = (resisteringCard: CreditCard) => {
    setResisteringCreditCard(resisteringCard);
  };

  return { resisteringCreditCard, changeResisteringCreditCard };
};
