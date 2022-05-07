import React, { useReducer } from "react";
import { ACTION } from "constant";

const cardListReducer = (state, action) => {
  let newState = [];
  switch (action.type) {
    case ACTION.CREATE: {
      newState = [...state, action.data];
      break;
    }
    case ACTION.EDIT_NICKNAME: {
      newState = state.map((data) =>
        data.cardId === action.targetId
          ? { ...data, nickname: action.newNickname }
          : data
      );
      break;
    }
    case ACTION.EDIT_CARD: {
      newState = state.map((data) =>
        data.cardId === action.data.cardId ? { ...action.data } : data
      );
      break;
    }
    default: {
      return newState;
    }
  }
  return newState;
};

export const CardListContext = React.createContext();
export const CardDispatchContext = React.createContext();

function CardListProvider({ children }) {
  const [cardListData, dispatch] = useReducer(cardListReducer, []);

  const onCreate = (
    cardId,
    cardNumbers,
    dueDate,
    owner,
    cvc,
    password,
    company
  ) => {
    dispatch({
      type: ACTION.CREATE,
      data: {
        cardId,
        cardNumbers,
        dueDate,
        owner,
        cvc,
        password,
        company,
      },
    });
  };

  const onEditNickname = (targetId, newNickname) => {
    dispatch({ type: ACTION.EDIT_NICKNAME, targetId, newNickname });
  };

  const onEditCard = (
    targetId,
    cardNumbers,
    dueDate,
    owner,
    cvc,
    password,
    company
  ) => {
    dispatch({
      type: ACTION.EDIT_CARD,
      data: {
        cardId: targetId,
        cardNumbers,
        dueDate,
        owner,
        cvc,
        password,
        company,
      },
    });
  };

  return (
    <CardListContext.Provider value={cardListData}>
      <CardDispatchContext.Provider
        value={{ onCreate, onEditNickname, onEditCard }}
      >
        {children}
      </CardDispatchContext.Provider>
    </CardListContext.Provider>
  );
}

export default CardListProvider;
