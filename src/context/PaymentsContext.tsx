import type { Dispatch, PropsWithChildren } from 'react';
import { createContext, useMemo } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import type { CreditCard } from '../types/CreditCard';

type PaymentsContextValue = {
  creditCards: CreditCard[];
  creditCardForm: CreditCard;
  setCreditCards: Dispatch<CreditCard[]>;
  setCreditCardForm: Dispatch<CreditCard>;
};

export const PaymentsContext = createContext<PaymentsContextValue>({
  creditCards: [],
  creditCardForm: {
    cardCompany: '카드사',
    cardNumbers: '',
    cvc: '',
    expirationDate: ['', ''],
    name: '',
    password: '',
    nickName: '',
  },

  setCreditCards: () => {
    throw new Error('No Provider');
  },
  setCreditCardForm: () => {
    throw new Error('No Provider');
  },
});

export const PaymentsProvider = (props: PropsWithChildren) => {
  const { children } = props;

  const { creditCards, internalSetCreditCards, creditCardForm, internalSetCreditCardForm } =
    useLocalStorage();

  const value = useMemo(
    () => ({
      creditCards,
      setCreditCards: internalSetCreditCards,
      creditCardForm,
      setCreditCardForm: internalSetCreditCardForm,
    }),
    [creditCards, creditCardForm],
  );

  return <PaymentsContext.Provider value={value}>{children}</PaymentsContext.Provider>;
};
