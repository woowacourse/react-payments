import React, { useReducer } from "react";

const cardListReducer = (state, action) => {
  let newState = [];
  switch (action.type) {
    case "CREATE": {
      newState = [...state, action.data];
      console.log("newState", newState);
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

  return (
    <CardListContext.Provider value={cardListData}>
      <CardDispatchContext.Provider value={{ onCreate }}>
        {children}
      </CardDispatchContext.Provider>
    </CardListContext.Provider>
  );
}

export default CardListProvider;
