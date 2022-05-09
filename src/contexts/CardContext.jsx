import { createContext, useReducer } from 'react';

import { useCardNumber, useCardOwnerName, useValidDate } from 'hooks';

const CardContext = createContext();

function cardKindReducer(state, action) {
  switch (action.type) {
    case 'SET_CARD_COLOR':
      return {
        ...state,
        color: action.color,
      };
    case 'SET_CARD_TITLE':
      return {
        ...state,
        title: action.title,
      };
  }
}

function CardContextProvider({ children }) {
  const { cardNumber, handleCardNumber, showCardNumberValidation } =
    useCardNumber('');
  const { cardOwnerName, handleCardOwnerName, showCardOwnerNameValidation } =
    useCardOwnerName('');
  const { validDate, handleValidDate, showValidDateValidation } =
    useValidDate('');
  const [cardKind, setCardKind] = useReducer(cardKindReducer, {
    color: '#ADD8E6',
    title: '공원 카드',
  });

  return (
    <CardContext.Provider
      value={{
        cardNumber,
        handleCardNumber,
        showCardNumberValidation,
        cardOwnerName,
        handleCardOwnerName,
        showCardOwnerNameValidation,
        validDate,
        handleValidDate,
        showValidDateValidation,
        cardKind,
        setCardKind,
      }}
    >
      {children}
    </CardContext.Provider>
  );
}

export { CardContext, CardContextProvider };
