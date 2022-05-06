import { createContext, useReducer } from 'react';
import reducer from 'store/card/reducer';

export const CardStateContext = createContext();
export const CardDispatchContext = createContext();

const defaultCardState = {
  cardNumber: ['', '', '', ''],
  cardNumberErrorMessage: '',
  cardExpiration: ['', ''],
  cardExpirationErrorMessage: '',
  cardOwner: '',
  cardOwnerErrorMessage: '',
  cardCvc: '',
  cardCvcErrorMessage: '',
  cardPassword: ['', ''],
  cardPasswordErrorMessage: '',
  cardCompanyIndex: -1,
  cardNickName: '',
  listModalFlag: false,
  tipModalFlag: false,
  cards: [],
};

const CardContext = ({ children }) => {
  const [cardState, dispatchCardAction] = useReducer(reducer, defaultCardState);

  return (
    <CardStateContext.Provider value={cardState}>
      <CardDispatchContext.Provider value={dispatchCardAction}>
        {children}
      </CardDispatchContext.Provider>
    </CardStateContext.Provider>
  );
};

export default CardContext;
