import { createContext, useContext, useState } from 'react';
import type { CardInformation } from '../domain/types/card';

const CardListContext = createContext<CardInformation[] | null>(null);
const CardListUpdateContext = createContext<React.Dispatch<React.SetStateAction<CardInformation[]>> | null>(null);

type CardListProviderProps = {
  children: React.ReactNode;
};

export function CardListProvider({ children }: CardListProviderProps) {
  const [cardList, setCardList] = useState<CardInformation[]>([
    {
      cardType: '우리카드',
      cardNumber: ['0000', '1111', '2222', '3333'],
      expirationDate: ['12', '25'],
      owner: 'EXAMPLE-1',
      alias: 'CONTEXT',
    },
  ]);

  return (
    <CardListContext.Provider value={cardList}>
      <CardListUpdateContext.Provider value={setCardList}>{children}</CardListUpdateContext.Provider>
    </CardListContext.Provider>
  );
}

export function useCardListContext() {
  const cardList = useContext(CardListContext);
  const setCardList = useContext(CardListUpdateContext);

  if (cardList === null || setCardList === null) {
    throw new Error('CardListContext가 null입니다');
  }

  return { cardList, setCardList };
}
