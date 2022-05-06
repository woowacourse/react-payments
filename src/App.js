import React, { useReducer, useEffect, useState } from 'react';
import Button from './components/Button';
import Card from './components/Card';
import InputForm from './components/InputForm';
import { DISPATCH_TYPE } from './constants';
import LineInputForm from './components/InputForm/LineInputForm';
import CardContext from './context';

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
    default:
      throw new Error();
  }
};

const defaultCardInputState = {
  cardNumber: {
    firstColumn: '',
    secondColumn: '',
    thirdColumn: '',
    forthColumn: '',
  },
  expirationDate: {
    month: '',
    year: '',
  },
  ownerName: '',
  securityCode: '',
  password: {
    firstNumber: '',
    secondNumber: '',
  },
  cardDesignation: '',
};

function App() {
  const [cardList, setCardList] = useState({});
  const [cardInput, cardInputDispatch] = useReducer(cardInputReducer, defaultCardInputState);
  const [page, setPage] = useState('addCardPage');
  const [isHide, setHide] = useState({
    addCard: 'app',
    completeAddCard: 'app hide',
    cardList: 'app hide',
  });

  const cardState = {
    cardList: cardList,
    setCardList: setCardList,
    cardInput: cardInput,
    cardInputDispatch: cardInputDispatch,
  };

  const handleChangePage = pageName => {
    setPage(pageName);
  };

  useEffect(() => {
    if (page === 'addCardPage') {
      setHide({ addCard: 'app', completeAddCard: 'app hide', cardList: 'app hide' });
    }
    if (page === 'completeAddCardPage') {
      setHide({ addCard: 'app hide', completeAddCard: 'app', cardList: 'app hide' });
    }
    if (page === 'cardListPage') {
      setHide({ addCard: 'app hide', completeAddCard: 'app hide', cardList: 'app' });
    }
  }, [page]);

  return (
    <div className="root">
      <CardContext.Provider value={cardState}>
        <div className={isHide.addCard}>
          <header>
            <Button />
            <h2 className="page-title">카드 추가</h2>
          </header>
          <Card cardInformation={cardInput} cardBoxSize={'small'}></Card>
          <InputForm
            cardInput={cardInput}
            cardInputDispatch={cardInputDispatch}
            handleChangePage={handleChangePage}
          ></InputForm>
        </div>

        <div className={isHide.completeAddCard}>
          <h2 className="page-title complete-page-title"> 카드 등록이 완료되었습니다. </h2>
          <Card cardInformation={cardInput} cardBoxSize={'big'}></Card>
          <LineInputForm handleChangePage={handleChangePage}></LineInputForm>
        </div>

        <div className={isHide.cardList}>
          <h2 className="page-title"> 보유 카드 </h2>
        </div>
      </CardContext.Provider>
    </div>
  );
}

export default App;
