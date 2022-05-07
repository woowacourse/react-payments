import React, { createContext, Dispatch, useReducer } from 'react';
import { ActionType, CardType } from 'types';

export type State = {
  firstInputCardNumber: string;
  secondInputCardNumber: string;
  thirdInputCardNumber: string;
  fourthInputCardNumber: string;
  name: string;
  expiredPeriodMonth: string;
  expiredPeriodYear: string;
  cvc: string;
  firstPassword: string;
  secondPassword: string;
  cardType: string;
  chageCardType: boolean;
  completeCard: boolean;
  cardAlias: string;
  cardList: Array<CardType>;
};

type Action = { type: ActionType; payload: string | boolean | Array<CardType> };

export type AppDispatch = Dispatch<Action>;
// 변수명 통일감 있게
const initalState: State = {
  firstInputCardNumber: '',
  secondInputCardNumber: '',
  thirdInputCardNumber: '',
  fourthInputCardNumber: '',
  name: '',
  expiredPeriodMonth: '',
  expiredPeriodYear: '',
  cvc: '',
  firstPassword: '',
  secondPassword: '',
  cardType: '',
  chageCardType: false,
  completeCard: false,
  cardAlias: '',
  cardList: [],
};

export const AppStateContext = createContext<State>(initalState);
export const AppDispatchContext = createContext<AppDispatch>(() => null);

export function createAction(
  type: ActionType,
  payload: string | boolean | Array<CardType>,
): Action {
  return {
    type,
    payload,
  };
}

function reducer(state: State, action: Action): any {
  switch (action.type) {
    case ActionType.FIRST_INPUT_CARD_NUMBER:
      return {
        ...state,
        firstInputCardNumber: action.payload,
      };
    case ActionType.SECOND_INPUT_CARD_NUMBER:
      return {
        ...state,
        secondInputCardNumber: action.payload,
      };
    case ActionType.THIRD_INPUT_CARD_NUMBER:
      return {
        ...state,
        thirdInputCardNumber: action.payload,
      };
    case ActionType.FOURTH_INPUT_CARD_NUMBER:
      return {
        ...state,
        fourthInputCardNumber: action.payload,
      };
    case ActionType.INPUT_NAME:
      return {
        ...state,
        name: action.payload,
      };
    case ActionType.INPUT_EXPIRED_PERIOD_MONTH:
      return {
        ...state,
        expiredPeriodMonth: action.payload,
      };
    case ActionType.INPUT_EXPIRED_PERIOD_YEAR:
      return {
        ...state,
        expiredPeriodYear: action.payload,
      };
    case ActionType.INPUT_CVC:
      return {
        ...state,
        cvc: action.payload,
      };
    case ActionType.FIRST_INPUT_PASSWORD:
      return {
        ...state,
        firstPassword: action.payload,
      };
    case ActionType.SECOND_INPUT_PASSWORD:
      return {
        ...state,
        secondPassword: action.payload,
      };
    case ActionType.CARD_TYPE:
      return {
        ...state,
        cardType: action.payload,
      };
    case ActionType.CHANGE_CARD_TYPE:
      return {
        ...state,
        chageCardType: action.payload,
      };
    case ActionType.COMPLETE_CARD:
      return {
        ...state,
        completeCard: action.payload,
      };
    case ActionType.INPUT_CARD_ALIAS:
      return {
        ...state,
        cardAlias: action.payload,
      };
    case ActionType.SET_CARD_LIST:
      return {
        ...state,
        cardList: action.payload,
      };
  }
}

function AppProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initalState);

  return (
    <>
      <AppStateContext.Provider value={state}>
        <AppDispatchContext.Provider value={dispatch}>{children}</AppDispatchContext.Provider>
      </AppStateContext.Provider>
    </>
  );
}

export default AppProvider;
