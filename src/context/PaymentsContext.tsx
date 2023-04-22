import type { Dispatch, PropsWithChildren } from 'react';
import { createContext, useState } from 'react';
import type { CreditCard } from '../types/CreditCard';

type PaymentsContextValue = {
  creditCards: CreditCard[];
  setCreditCards: Dispatch<CreditCard[]>;
};

const STORAGE_KEY = 'creditCards' as const;

export const PaymentsContext = createContext<PaymentsContextValue>({
  creditCards: [],
  setCreditCards: () => {
    throw new Error('No Provider');
  },
});

export const PaymentsProvider = (props: PropsWithChildren) => {
  const { children } = props;
  const [creditCards, setCreditCards] = useState<CreditCard[]>(
    JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '[]'),
  );

  const internalSetCreditCards: Dispatch<CreditCard[]> = (nextCreditCards) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(nextCreditCards));

    setCreditCards(nextCreditCards);
  };

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <PaymentsContext.Provider value={{ creditCards, setCreditCards: internalSetCreditCards }}>
      {children}
    </PaymentsContext.Provider>
  );
};
