import React, { useReducer } from "react";

const cardListReducer = (state, action) => {
  let newState = [];
  switch (action.type) {
    case "CREATE": {
      newState = [...state, action.data];
      break;
    }
    case "EDIT_NICKNAME": {
      newState = state.map((data) =>
        data.cardId === action.targetId
          ? { ...data, nickname: action.newNickname }
          : data
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
      type: "CREATE",
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
    dispatch({ type: "EDIT_NICKNAME", targetId, newNickname });
  };

  return (
    <CardListContext.Provider value={cardListData}>
      <CardDispatchContext.Provider value={{ onCreate, onEditNickname }}>
        {children}
      </CardDispatchContext.Provider>
    </CardListContext.Provider>
  );
}

export default CardListProvider;
