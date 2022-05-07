import { createContext, useReducer, useMemo, useContext, useEffect } from 'react';
import { requestErrorHandler, requestGetCardData, requestInsertCardData } from 'api';
import { REQUEST_STATUS } from 'constants/';

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
      // 컨텐츠를 제거한다.
    },
  };

  return actionList[type]();
}

function CardDataContextProvider({ children }) {
  const [cardList, dispatch] = useReducer(reducer, []);
  const value = useMemo(() => ({ cardList, dispatch }), [cardList]);

  useEffect(() => {
    (async () => {
      const response = await requestGetCardData();

      requestErrorHandler(
        response,
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

  const insertCardData = async (cardData) => {
    const response = await requestInsertCardData(cardData);

    requestErrorHandler(
      response,
      (successResult) => dispatch({ type: 'INSERT', data: { cardData: successResult } }),
      (errorMessage) => alert(errorMessage),
    );
  };

  const updateCardData = (index, cardData) =>
    dispatch({ type: 'UPDATE', data: { index, cardData } });

  const deleteCardData = (index) => dispatch({ type: 'INSERT', data: { index } });

  return { cardList, insertCardData, updateCardData, deleteCardData };
}

export { CardDataContext, CardDataContextProvider, useCardDataContext };
