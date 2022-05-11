import React, { useReducer } from "react";
import { ACTION } from "constant";

const cardListReducer = (state, action) => {
  switch (action.type) {
    case ACTION.CREATE: {
      return [...state, action.data];
    }
    case ACTION.EDIT_NICKNAME: {
      return state.map((data) =>
        data.id === action.targetId
          ? { ...data, nickname: action.newNickname }
          : data
      );
    }
    case ACTION.EDIT_CARD: {
      return state.map((data) =>
        data.id === action.data.id ? { ...action.data } : data
      );
    }
    case ACTION.REMOVE: {
      return state.filter((data) => data.id !== action.targetId);
    }
    default: {
      return state;
    }
  }
};

export const CardListContext = React.createContext();
export const CardDispatchContext = React.createContext();

function CardListProvider({ children }) {
  const [cardListData, dispatch] = useReducer(cardListReducer, []);

  const onCreate = (
    id,
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
        id,
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
        id: targetId,
        cardNumbers,
        dueDate,
        owner,
        cvc,
        password,
        company,
      },
    });
  };

  const onRemove = (targetId) => {
    dispatch({ type: ACTION.REMOVE, targetId });
  };

  return (
    <CardListContext.Provider value={cardListData}>
      <CardDispatchContext.Provider
        value={{ onCreate, onEditNickname, onEditCard, onRemove }}
      >
        {children}
      </CardDispatchContext.Provider>
    </CardListContext.Provider>
  );
}

export default CardListProvider;
