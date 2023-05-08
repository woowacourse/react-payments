import React, { useMemo } from 'react';
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

  const memoizedValue = useMemo(
    () => ({ cardList, setCardList }),
    [cardList, setCardList]
  );

  return (
    <CardListContext.Provider
      value={{
        cardList: memoizedValue.cardList,
        setCardList: memoizedValue.setCardList,
      }}
    >
      {children}
    </CardListContext.Provider>
  );
}

export { CardListContext, CardListContextProvider };
