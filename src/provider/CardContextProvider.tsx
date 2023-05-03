import React from 'react';
import { useLocalStorage } from '@hooks/useLocalStorage';
import { CardInfo } from '@type/card';
import { LOCAL_STORAGE_CARD_KEY } from '@constants/constant';

interface CardListContextProps {
  cardList: CardInfo[];
  setCardList: (card: CardInfo[]) => void;
}

const CardListContext = React.createContext<CardListContextProps>({
  cardList: [],
  setCardList: () => {},
});

function CardListContextProvider({ children }: React.PropsWithChildren) {
  const [cardList, setCardList] = useLocalStorage<CardInfo[]>(
    [],
    LOCAL_STORAGE_CARD_KEY
  );

  return (
    <CardListContext.Provider value={{ cardList, setCardList }}>
      {children}
    </CardListContext.Provider>
  );
}

export { CardListContext, CardListContextProvider };
