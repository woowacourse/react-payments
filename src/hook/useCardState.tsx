import { useContext, useMemo } from 'react';
import { CardDispatchContext, CardStateContext } from '../context/CardContext';

export const useCardState = () => {
  const context = useContext(CardStateContext);

  if (!context) throw new Error('컨텍스트가 존재하지 않습니다.');

  return context;
};

export const useCardDispatch = () => {
  const context = useContext(CardDispatchContext);

  if (!context) throw new Error('컨텍스트가 존재하지 않습니다.');

  return context;
};

export const useCardStore = () => {
  const state = useCardState();
  const dispatch = useCardDispatch();

  return useMemo(
    () => ({
      get: () => {
        return state;
      },
      setCardNumber: (cardNumber: string) => dispatch({ type: 'SET_CARD_NUMBER', parameter: cardNumber }),
      setExpirationDate: (expirationDate: string) =>
        dispatch({ type: 'SET_EXPIRATION_DATE', parameter: expirationDate }),
      setCardOwnerName: (cardOwnerName: string) => dispatch({ type: 'SET_CARD_OWNER_NAME', parameter: cardOwnerName }),
      setSecurityCode: (securityCode: string) => dispatch({ type: 'SET_SECURITY_CODE', parameter: securityCode }),
      setFirstDigit: (firstDigit: string) => dispatch({ type: 'SET_FIRST_DIGIT', parameter: firstDigit }),
      setSecondDigit: (secondDigit: string) => dispatch({ type: 'SET_SECOND_DIGIT', parameter: secondDigit }),
      setSelectedCard: (selectedCard: string) => dispatch({ type: 'SET_SELECTED_CARD', parameter: selectedCard }),
      setCardNickName: (cardNickName: string) => dispatch({ type: 'SET_CARD_NICK_NAME', parameter: cardNickName }),
    }),
    [state, dispatch]
  );
};
