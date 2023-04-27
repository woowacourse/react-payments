import { useContext } from 'react';

import CardInfoContext from '../contexts/CardInfoContext';

export const useFormState = () => {
  const { cardNumbers, expirationDate, securityCode, password } = useContext(CardInfoContext);

  const isFilledCardInfos = () => {
    return (
      cardNumbers.firstCardNumber.length === 4 &&
      cardNumbers.secondCardNumber.length === 4 &&
      cardNumbers.thirdCardNumber.length === 4 &&
      cardNumbers.fourthCardNumber.length === 4 &&
      expirationDate.month &&
      expirationDate.month.length >= 1 &&
      expirationDate.year &&
      expirationDate.year.length === 2 &&
      securityCode.length === 3 &&
      password.firstPassword.length === 1 &&
      password.secondPassword.length === 1
    );
  };

  return { isFilledCardInfos };
};
