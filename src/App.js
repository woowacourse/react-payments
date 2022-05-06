import React, { useReducer, useEffect, useState } from 'react';
import Button from './components/Button';
import Card from './components/Card';
import InputForm from './components/InputForm';
import { DISPATCH_TYPE, DEFAULT_CARD_INFO, DEFAULT_ROUTE_INFO, PAGE } from './constants';
import LineInputForm from './components/InputForm/LineInputForm';
import { CardContext, PageContext } from './context';
import CardListPage from './components/Page/CardListPage';

const cardInputReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case DISPATCH_TYPE.CHANGE_CARD_NUMBER: {
      const { key, cardNumber } = payload;
      return {
        ...state,
        cardNumber: { ...state.cardNumber, [`${key}`]: cardNumber },
      };
    }
    case DISPATCH_TYPE.CHANGE_EXPIRATION_DATE: {
      const { key, date } = payload;
      return {
        ...state,
        expirationDate: { ...state.expirationDate, [`${key}`]: date },
      };
    }
    case DISPATCH_TYPE.CHANGE_OWNER_NAME: {
      const { ownerName } = payload;
      return {
        ...state,
        ownerName,
      };
    }
    case DISPATCH_TYPE.CHANGE_SECURITY_CODE: {
      const { securityCode } = payload;
      return {
        ...state,
        securityCode: securityCode,
      };
    }
    case DISPATCH_TYPE.CHANGE_PASSWORD: {
      const { key, password } = payload;
      return {
        ...state,
        password: { ...state.password, [`${key}`]: password },
      };
    }
    case DISPATCH_TYPE.CHANGE_CARD_DESIGNATION: {
      const { cardDesignation } = payload;
      return {
        ...state,
        cardDesignation: cardDesignation,
      };
    }
    case DISPATCH_TYPE.RESET: {
      return { ...payload };
    }

    default:
      throw new Error();
  }
};

function App() {
  const [cardList, setCardList] = useState({});
  const [page, setPage] = useState(PAGE.ADD_CARD);
  const [tempRouter, setTempRouter] = useState(DEFAULT_ROUTE_INFO);
  const [cardInput, cardInputDispatch] = useReducer(cardInputReducer, DEFAULT_CARD_INFO);

  const cardState = {
    cardList: cardList,
    setCardList: setCardList,
    cardInput: cardInput,
    cardInputDispatch: cardInputDispatch,
  };

  const pageState = {
    page: page,
    setPage: setPage,
    tempRouter: tempRouter,
  };

  const handleChangePage = pageName => {
    setPage(pageName);
  };

  useEffect(() => {
    if (page === PAGE.ADD_CARD) {
      setTempRouter({ addCard: 'app', completeAddCard: 'app hide', cardList: 'app hide' });
    }
    if (page === PAGE.COMPLETE_ADD_CARD) {
      setTempRouter({ addCard: 'app hide', completeAddCard: 'app', cardList: 'app hide' });
    }
    if (page === PAGE.CARD_LIST) {
      setTempRouter({ addCard: 'app hide', completeAddCard: 'app hide', cardList: 'app' });
    }
  }, [page]);

  return (
    <div className="root">
      <PageContext.Provider value={pageState}>
        <CardContext.Provider value={cardState}>
          <div className={tempRouter.addCard}>
            <header>
              <Button onClick={() => handleChangePage('cardListPage')} />
              <h2 className="page-title">카드 추가</h2>
            </header>
            <Card cardInformation={cardInput} cardBoxSize={'small'}></Card>
            <InputForm
              cardInput={cardInput}
              cardInputDispatch={cardInputDispatch}
              handleChangePage={handleChangePage}
            ></InputForm>
          </div>

          <div className={tempRouter.completeAddCard}>
            <h2 className="page-title complete-page-title"> 카드 등록이 완료되었습니다. </h2>
            <Card cardInformation={cardInput} cardBoxSize={'big'}></Card>
            <LineInputForm handleChangePage={handleChangePage}></LineInputForm>
          </div>

          <CardListPage />
        </CardContext.Provider>
      </PageContext.Provider>
    </div>
  );
}

export default App;
