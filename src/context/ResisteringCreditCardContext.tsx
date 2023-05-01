import type { Dispatch, PropsWithChildren } from 'react';
import { createContext, useCallback, useMemo } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import type { CreditCard } from '../types/CreditCard';

const RESISTERING_CREDIT_CARD_KEY = 'resisteringCreditCard' as const;

type ResisteringCreditCardContextValue = {
  resisteringCreditCard: CreditCard;
  setResisteringCreditCard: Dispatch<CreditCard>;
};

export const ResisteringCreditCardContext = createContext<ResisteringCreditCardContextValue>({
  resisteringCreditCard: {
    cardCompany: '카드사',
    cardNumbers: '',
    cvc: '',
    expirationDate: ['', ''],
    name: '',
    password: '',
    nickName: '',
  },

  setResisteringCreditCard: () => {
    throw new Error('No Provider');
  },
});

export const ResisteringCreditCardProvider = (props: PropsWithChildren) => {
  const { children } = props;

  const { localStorageData, internalSetLocalStorageData } = useLocalStorage<CreditCard>(
    RESISTERING_CREDIT_CARD_KEY,
    {
      cardCompany: '카드사',
      cardNumbers: '',
      cvc: '',
      expirationDate: ['', ''],
      name: '',
      password: '',
      nickName: '',
    },
  );

  const setResisteringCreditCard = useCallback(internalSetLocalStorageData, []);

  const value = useMemo(
    () => ({
      resisteringCreditCard: localStorageData,
      setResisteringCreditCard,
    }),
    [localStorageData, setResisteringCreditCard],
  );

  return (
    <ResisteringCreditCardContext.Provider value={value}>
      {children}
    </ResisteringCreditCardContext.Provider>
  );
};
