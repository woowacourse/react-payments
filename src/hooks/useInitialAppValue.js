import { useReducer } from 'react';

const useInitialAppValue = (reducer, initialState) => {
  const [
    {
      cardNumber,
      cardNumberErrorMessage,
      cardExpiration,
      cardExpirationErrorMessage,
      cardOwner,
      cardOwnerErrorMessage,
      cardCvc,
      cardCvcErrorMessage,
      cardPassword,
      cardPasswordErrorMessage,
      cardCompanyIndex,
      cardCompanyErrorMessage,
      listModalFlag,
      tipModalFlag,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  const value = {
    cardNumber,
    cardNumberErrorMessage,
    cardExpiration,
    cardExpirationErrorMessage,
    cardOwner,
    cardOwnerErrorMessage,
    cardCvc,
    cardCvcErrorMessage,
    cardPassword,
    cardPasswordErrorMessage,
    cardCompanyIndex,
    cardCompanyErrorMessage,
    listModalFlag,
    tipModalFlag,
    dispatch,
  };

  return value;
};

export default useInitialAppValue;
