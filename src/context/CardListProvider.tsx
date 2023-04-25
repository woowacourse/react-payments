import { createContext, useMemo, useState } from 'react';
import useWrappingContext from '../hooks/useWrappingContext';
import type { CardInformation } from '../components/Common/Card/types';

interface CardListState {
  cardList: CardInformation[];
  dispatchCardList: (card: CardInformation) => void;
}

export const CardListStore = createContext<CardListState | null>(null);

export const useCardListStore = () => useWrappingContext(CardListStore);

export function CardListProvider({ children }: { children: React.ReactNode }) {
  const [cardList, setCardList] = useState<CardInformation[]>([]);

  const value = useMemo(
    () => ({
      cardList,
      dispatchCardList: (card: CardInformation) => {
        setCardList(prev => [...prev, card]);
      },
    }),
    [cardList],
  );

  return <CardListStore.Provider value={value}>{children}</CardListStore.Provider>;
}

export default CardListStore;
