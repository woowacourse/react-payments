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
  recommendCreditCardDisplayName: (owner: string) => string;
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

  const recommendCreditCardDisplayName = (owner: string) => {
    const displayName = owner ? `${owner}의 카드` : '카드';
    let alterDisplayName = displayName;
    let count = 2;

    // eslint-disable-next-line no-loop-func
    while (creditCards.find((creditCard) => creditCard.displayName === alterDisplayName)) {
      alterDisplayName = `${displayName} ${count}`;
      count += 1;
    }
    return alterDisplayName;
  };

  const contextValue = useMemo(
    () => ({
      creditCards,
      setCreditCards,
      getCreditCardById,
      assignCreditCardId,
      updateCreditCard,
      recommendCreditCardDisplayName,
    }),
    [creditCards],
  );

  return <PaymentsContext.Provider value={contextValue}>{children}</PaymentsContext.Provider>;
};
