import { createContext, ReactNode, useReducer } from "react";
import { initialState, reducer } from "../reducer/cardReducer";

const CardInfoContext = createContext({
  state: {
    cardNumber: {
      firstCardNumber: "",
      secondCardNumber: "",
      thirdCardNumber: "",
      fourthCardNumber: "",
    },
    expireDate: {
      month: "",
      year: "",
    },
    holderName: "",
    securityCode: "",
    password: {
      firstPassword: "",
      secondPassword: "",
    },
    cardAlias: "",
  },
  dispatch: (value: any) => {},
});

const CardInfoProvider = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
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
