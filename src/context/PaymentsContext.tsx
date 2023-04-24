import type { Dispatch, PropsWithChildren } from 'react';
import { createContext, useMemo, useState } from 'react';
import type { CreditCard } from '../types/CreditCard';

type PaymentsContextValue = {
  creditCards: CreditCard[];
  setCreditCards: Dispatch<CreditCard[]>;
};

export const PaymentsContext = createContext<PaymentsContextValue>({
  creditCards: [],
  setCreditCards: () => {
    throw new Error('No Provider');
  },
});

export const PaymentsProvider = (props: PropsWithChildren) => {
  const { children } = props;
  const [creditCards, setCreditCards] = useState<CreditCard[]>(
    JSON.parse(localStorage.getItem('creditCards') ?? '[]'),
  );

  const internalSetCreditCards: Dispatch<CreditCard[]> = (nextCreditCards) => {
    localStorage.setItem('creditCards', JSON.stringify(nextCreditCards));

    setCreditCards(nextCreditCards);
  };

  const contextValue = useMemo(() => ({ creditCards, setCreditCards: internalSetCreditCards }), []);

  return <PaymentsContext.Provider value={contextValue}>{children}</PaymentsContext.Provider>;
};
