import { createContext, useReducer, useMemo, useContext, useEffect, useState } from 'react';
import {
  requestDeleteCardData,
  requestErrorHandler,
  requestGetCardData,
  requestInsertCardData,
} from 'api';

const CardDataContext = createContext();

function reducer(cardList, { type, data }) {
  const actionList = {
    PRELOAD: () => data,
    SELECT: () => {},
    INSERT: () => {
      const { cardData } = data;
      return cardList.concat({ ...cardData, id: new Date().getTime() });
    },
    UPDATE: () => {
      // 기존 컨텐츠를 업데이트한다.
    },
    DELETE: () => {
      const newCardList = [...cardList];
      const { index } = data;

      newCardList.splice(index, 1);
      return newCardList;
    },
  };

  return actionList[type]();
}

function CardDataContextProvider({ children }) {
  const [cardEditIndex, setEditIndex] = useState(-1);
  const [cardList, dispatch] = useReducer(reducer, []);
  const value = useMemo(() => ({ cardList, dispatch }), [cardList]);

  useEffect(() => {
    (async () => {
      const response = await requestGetCardData();

      requestErrorHandler(response)(
        (successResult) => dispatch({ type: 'PRELOAD', data: successResult }),
        (errorMessage) => alert(`서버에서 카드 목록을 로드에 실패하였습니다..\n${errorMessage}`),
      );
    })();
  }, []);

  return <CardDataContext.Provider value={value}>{children}</CardDataContext.Provider>;
}

function useCardDataContext() {
  const context = useContext(CardDataContext);
  if (context === undefined) {
    throw new Error('CardDataContextProvider가 로드되지 않았습니다.');
  }

  const { cardList, dispatch } = context;

  const handleInsertCardData = async (cardData) => {
    const response = await requestInsertCardData(cardData);

    requestErrorHandler(response)(
      (successResult) => dispatch({ type: 'INSERT', data: { cardData: successResult } }),
      (errorMessage) => alert(errorMessage),
    );
  };

  const handleUpdateCardData = (index, cardData) =>
    dispatch({ type: 'UPDATE', data: { index, cardData } });

  const handleDeleteCardData = async (index) => {
    const { id } = cardList[index];
    const response = await requestDeleteCardData(id);

    requestErrorHandler(response)(
      () => dispatch({ type: 'DELETE', data: { index } }),
      (errorMessage) => alert(errorMessage),
    );
  };

  return { cardList, handleInsertCardData, handleUpdateCardData, handleDeleteCardData };
}

export { CardDataContext, CardDataContextProvider, useCardDataContext };
