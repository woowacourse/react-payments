import React, { useRef, useLayoutEffect, useReducer } from 'react';

import {
  CardNumber,
  CardOwner,
  CardPassword,
  CardSecurityCode,
  CardShape,
  Footer,
  Header,
  DueDate,
} from './components';

const initialState = {
  dimensions: { width: 0, height: 0 },
  cardOwnerName: 'NAME',
  cardNumber: '',
  dueDate: 'MM / YY',
  isAllCompleted: {
    isFinishTypingCardNumber: false,
    isCorrectPwd: false,
    isCorrectOwnerName: false,
    isCorrectCardDate: false,
    isCorrectSecurityCode: false,
  },
};

function reducer(state, action) {
  switch (action.type) {
    case 'DIMENSIONS':
      return { ...state, dimensions: action.dimensions };
    case 'CARD_OWNER_NAME':
      return {
        ...state,
        cardOwnerName: action.cardOwnerName,
        isAllCompleted: {
          ...state.isAllCompleted,
          isCorrectOwnerName: action.isCorrectOwnerName,
        },
      };
    case 'CARD_NUMBER':
      return {
        ...state,
        cardNumber: action.cardNumber,
        isAllCompleted: {
          ...state.isAllCompleted,
          isFinishTypingCardNumber: action.isFinishTypingCardNumber,
        },
      };
    case 'DUE_DATE':
      return {
        ...state,
        dueDate: action.dueDate,
        isAllCompleted: {
          ...state.isAllCompleted,
          isCorrectCardDate: action.isCorrectCardDate,
        },
      };
    case 'CARD_SECURITY_CODE':
      return {
        ...state,
        cardSecurityCode: action.cardSecurityCode,
        isAllCompleted: {
          ...state.isAllCompleted,
          isCorrectSecurityCode: action.isCorrectSecurityCode,
        },
      };
    case 'CARD_PASSWORD':
      return {
        ...state,
        isAllCompleted: {
          ...state.isAllCompleted,
          isCorrectPwd: action.isCorrectPwd,
        },
      };
    default:
      throw new Error();
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const targetRef = useRef();

  const isAllCompleted = Object.values(state.isAllCompleted).every(ok => ok);

  useLayoutEffect(() => {
    if (targetRef.current) {
      dispatch({
        type: 'DIMENSIONS',
        dimensions: {
          width: targetRef.current.offsetWidth,
          height: targetRef.current.offsetHeight,
        },
      });
    }
  }, []);

  return (
    <div className="app" ref={targetRef}>
      <Header title={'카드추가'} />
      <CardShape
        dimensions={state.dimensions}
        cardNumber={state.cardNumber}
        cardOwnerName={state.cardOwnerName}
        cardDate={state.dueDate}
      />
      <CardNumber dispatch={dispatch} />
      <DueDate dispatch={dispatch} dimensions={state.dimensions} />
      <CardOwner dispatch={dispatch} />
      <CardSecurityCode dispatch={dispatch} />
      <CardPassword dispatch={dispatch} />
      <Footer isAllCompleted={isAllCompleted} />
    </div>
  );
}

export default App;
