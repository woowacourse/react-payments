import type { Dispatch, PropsWithChildren } from 'react';
import { createContext, useMemo } from 'react';
import type { CreditCard } from '../domain/CreditCard';
import { usePersistedState } from '../hooks/usePersistedState';

type PaymentsContextValue = {
  creditCards: CreditCard[];
  setCreditCards: Dispatch<CreditCard[]>;
  getCreditCardById: (id: number) => CreditCard | null;
  assignCreditCardId: () => number;
  updateCreditCard: (creditCard: CreditCard) => void;
};

export const PaymentsContext = createContext<PaymentsContextValue | null>(null);

export const PaymentsProvider = (props: PropsWithChildren) => {
  const { children } = props;
  const [creditCards, setCreditCards] = usePersistedState<CreditCard[]>('creditCards', []);
  const [currentCreditCardId, setCurrentCreditCardId] = usePersistedState('currentCreditCardId', 1);

  const assignCreditCardId = () => {
    setCurrentCreditCardId((id) => id + 1);
    return currentCreditCardId;
  };

  const getCreditCardById = (id: number) => {
    return creditCards.find((creditCard) => creditCard.id === id) ?? null;
  };

  const updateCreditCard = (newCreditCard: CreditCard) => {
    setCreditCards(
      creditCards.map((creditCard) =>
        creditCard.id === newCreditCard.id ? newCreditCard : creditCard,
      ),
    );
  };

  const contextValue = useMemo(
    () => ({
      creditCards,
      setCreditCards,
      getCreditCardById,
      assignCreditCardId,
      updateCreditCard,
    }),
    [creditCards],
  );

  return <PaymentsContext.Provider value={contextValue}>{children}</PaymentsContext.Provider>;
};
