import { createContext, useReducer } from "react";

export const CardDataContext = createContext();

const initialState = [];

const reducer = (state, action) => {
  switch (action.type) {
    case "CREATE":
      return [...state, action.payload];
    default:
      return state;
  }
};

const CardDataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CardDataContext.Provider value={{ state, dispatch }}>
      {children}
    </CardDataContext.Provider>
  );
};

export default CardDataProvider;
