import { createContext, useReducer } from "react";
import { initialState, reducer } from "../reducer/cardReducer";

const CardInfoContext = createContext({
  state: {
    cardNumber: {},
    expireDate: {},
    holderName: {},
    securityCode: {},
    password: {},
    cardAlias: {},
  },
  dispatch: () => {},
});

const CardInfoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = {
    state: {
      cardNumber: state.cardNumber,
      expireDate: state.expireDate,
      holderName: state.holderName,
      securityCode: state.securityCode,
      password: state.password,
      cardAlias: state.cardAlias,
    },
    dispatch,
  };

  return (
    <CardInfoContext.Provider value={value}>
      {children}
    </CardInfoContext.Provider>
  );
};

export { CardInfoProvider, CardInfoContext };
