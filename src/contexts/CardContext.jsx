import { createContext, useReducer } from 'react';

import { useCardNumber, useCardOwnerName, useValidDate } from 'hooks';

// TODO: provider와 context 파일 나눠야하는지 고민하기
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

function CardInfoProvider({ children }) {
  const {
    cardNumber,
    encryptedCardNumber,
    handleCardNumber,
    showCardNumberValidation,
  } = useCardNumber('');
  const { cardOwnerName, handleCardOwnerName, showCardOwnerNameValidation } =
    useCardOwnerName('');
  const { validDate, handleValidDate, showValidDateValidation } =
    useValidDate('');
  const [cardKind, setCardKind] = useReducer(cardKindReducer, {
    color: '#ADD8E6',
    title: '공원 카드',
  });

  // TODO: 값 리셋하는 함수 필요
  const reset = () => {};

  return (
    <CardContext.Provider
      value={{
        cardNumber,
        encryptedCardNumber,
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

export { CardContext, CardInfoProvider };
