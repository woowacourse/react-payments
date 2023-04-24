import type { Dispatch, PropsWithChildren } from 'react';
import { createContext, useMemo } from 'react';
import { useCreditCardStorage } from '../hooks/useCreditCardStorage';
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

  const { creditCards, internalSetCreditCards } = useCreditCardStorage();

  const value = useMemo(
    () => ({
      creditCards,
      setCreditCards: internalSetCreditCards,
    }),
    [creditCards],
  );

  return <PaymentsContext.Provider value={value}>{children}</PaymentsContext.Provider>;
};
