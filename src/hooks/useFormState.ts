import { useContext } from 'react';

import CardInfoListContext from '../contexts/CardInfoListContext';
import { CardInfo } from '../types/state';
import { PATHNAME } from '../constants/pathname';
import { useNavigationTo } from './useNavigationTo';

export const useFormState = ({
  cardNumbers,
  expirationDate,
  ownerName,
  securityCode,
  password,
  cardCompany,
}: CardInfo) => {
  const { cardInfoList, setCardInfoList } = useContext(CardInfoListContext);
  const { handleClick } = useNavigationTo(PATHNAME.HOME);

  const handleOnClickSubmitButton = () => {
    setCardInfoList([
      ...cardInfoList,
      { cardNumbers, expirationDate, ownerName, securityCode, password, cardCompany },
    ]);

    handleClick();
  };

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

  return { handleOnClickSubmitButton, isFilledCardInfos };
};
