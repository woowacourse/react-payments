import type { Dispatch, PropsWithChildren } from 'react';
import { createContext, useCallback, useMemo } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import type { CreditCard } from '../types/CreditCard';

const CREDIT_CARDS_KEY = 'creditCards' as const;

type CreditCardsContextValue = {
  creditCards: CreditCard[];
  setCreditCards: Dispatch<CreditCard[]>;
};

export const CreditCardsContext = createContext<CreditCardsContextValue>({
  creditCards: [],
  setCreditCards: () => {
    throw new Error('No Provider');
  },
});

export const CreditCardsProvider = (props: PropsWithChildren) => {
  const { children } = props;

  const { localStorageData, internalSetLocalStorageData } = useLocalStorage<CreditCard[]>(
    CREDIT_CARDS_KEY,
    [],
  );

  const setCreditCards = useCallback(internalSetLocalStorageData, []);

  const value = useMemo(
    () => ({
      creditCards: localStorageData,
      setCreditCards,
    }),
    [localStorageData, setCreditCards],
  );

  return <CreditCardsContext.Provider value={value}>{children}</CreditCardsContext.Provider>;
};
