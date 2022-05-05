import React, { useState, useRef, useLayoutEffect, useReducer } from 'react';

import CardFormPage from './components/CardFormPage';
import CardListPage from './components/CardListPage';
import CardSubmitPage from './components/CardSubmitPage';
import { CardDispatchContext, CardInfoContext } from './context';
import useInputHandler from './hooks/useInputHandler';
import { validateCardNumbers, validateOwner } from './validator';

const initialCardListState = [];

const cardListReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_CARD_ITEM':
      return [...state, action.card];
    default:
      return state;
  }
};

function App() {
  const targetRef = useRef();

  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const [cardList, cardListDispatch] = useReducer(cardListReducer, initialCardListState);

  const [cardCompany, setCardCompany] = useState({
    hexColor: '',
    name: '',
  });
  const {
    errorMessage: cardNoErrorMessage,
    setErrorMessage: setCardNoErrorMessage,
    inputValue: cardNumbers,
    updateInputState: updateCardNumbers,
  } = useInputHandler(validateCardNumbers, {
    cardNoA: '',
    cardNoB: '',
    cardNoC: '',
    cardNoD: '',
  });
  const [cardDate, setCardDate] = useState({
    month: '',
    year: '',
  });
  const {
    errorMessage: ownerErrorMessage,
    inputValue: owner,
    updateInputState: updateOwner,
  } = useInputHandler(validateOwner, {
    name: '',
  });

  useLayoutEffect(() => {
    if (targetRef.current) {
      setDimensions({
        width: targetRef.current.offsetWidth,
        height: targetRef.current.offsetHeight,
      });
    }
  }, []);

  return (
    <main className="app" ref={targetRef}>
      <CardDispatchContext.Provider value={cardListDispatch}>
        <CardInfoContext.Provider
          value={{
            cardCompany,
            cardNumbers,
            cardDate,
            owner,
          }}>
          <CardFormPage
            dimensions={dimensions}
            cardNoErrorMessage={cardNoErrorMessage}
            ownerErrorMessage={ownerErrorMessage}
            setCardCompany={setCardCompany}
            setCardNoErrorMessage={setCardNoErrorMessage}
            updateCardNumbers={updateCardNumbers}
            setCardDate={setCardDate}
            updateOwner={updateOwner}
          />
          <CardSubmitPage />
        </CardInfoContext.Provider>
        <CardListPage cardList={cardList} />
      </CardDispatchContext.Provider>
    </main>
  );
}

export default App;
