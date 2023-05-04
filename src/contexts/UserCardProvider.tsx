import { Card } from 'components/common/Card/types';
import { CardDB } from 'db/Cards';
import { createContext, PropsWithChildren, useState, Dispatch, useContext } from 'react';

type CardProviderAction = {
  addCard: Dispatch<Card>;
};

const userCardContext = createContext<[Card[], CardProviderAction] | undefined>(undefined);

export function UserCardProvider({ children }: PropsWithChildren) {
  const [userCards, setUserCards] = useState<Card[]>(() => CardDB.getCards());

  const actions: CardProviderAction = {
    addCard(card: Card) {
      setUserCards((prevCards) => [...prevCards, card]);
      CardDB.registerCard(card);
    },
  };

  return (
    <userCardContext.Provider value={[userCards, actions]}>{children}</userCardContext.Provider>
  );
}

export const useUserCards = () => {
  const value = useContext(userCardContext);

  if (value === undefined) {
    throw new Error('UserCardProvider 하위에 useUserCardContext가 있어야 합니다.');
  }
  return value;
};
