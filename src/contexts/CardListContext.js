import { createContext, useReducer, useMemo, useContext } from 'react';

const CardListContext = createContext();

function reducer(cardList, { type, data }) {
  const actionList = {
    PRELOAD: () => {
      // 초기 값을 저장한다.
    },
    SELECT: () => {},
    INSERT: () => {
      const { cardData } = data;
      return cardList.concat(cardData);
    },
    UPDATE: () => {
      // 기존 컨텐츠를 업데이트한다.
    },
    DELETE: () => {
      // 컨텐츠를 제거한다.
    },
  };

  return actionList[type]();
}

function CardListContextProvider({ children }) {
  const [cardList, dispatch] = useReducer(reducer, []);
  const value = useMemo(() => ({ cardList, dispatch }), [cardList]);

  return <CardListContext.Provider value={value}>{children}</CardListContext.Provider>;
}

function useCardList() {
  const context = useContext(CardListContext);
  if (context === undefined) {
    throw new Error('CardListContextProvider가 로드되지 않았습니다.');
  }

  const { cardList, dispatch } = context;

  const insertCardData = (cardData) => dispatch({ type: 'INSERT', data: { cardData } });
  const updateCardData = (index, cardData) =>
    dispatch({ type: 'UPDATE', data: { index, cardData } });
  const deleteCardData = (index) => dispatch({ type: 'INSERT', data: { index } });

  return { cardList, insertCardData, updateCardData, deleteCardData };
}

export { CardListContext, CardListContextProvider, useCardList };
