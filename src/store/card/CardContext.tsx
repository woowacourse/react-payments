import { createContext, Dispatch, useReducer } from 'react';
import reducer from 'store/card/reducer';
import { CardAction } from 'types/cardInfo';

export const defaultCardState = {
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
  cards: [],
};

export const CardStateContext = createContext(defaultCardState);
export const CardDispatchContext = createContext<Dispatch<CardAction>>(undefined);

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
