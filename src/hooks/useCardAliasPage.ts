import { ChangeEvent, useContext, useEffect, useRef } from 'react';

import CardInfoContext from '../contexts/CardInfoContext';

import { PATHNAME } from '../constants/pathname';
import { useNavigationTo } from './useNavigationTo';

export const useCardAliasPage = () => {
  const {
    cardNumbers,
    expirationDate,
    ownerName,
    securityCode,
    password,
    cardCompany,
    cardAlias,
    setCardAlias,
    setCardInfoList,
  } = useContext(CardInfoContext);
  const navigationToHome = useNavigationTo(PATHNAME.HOME);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (cardAlias && cardAlias?.length >= 15) {
      buttonRef.current?.focus();
    }
  }, [cardAlias]);

  const onChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    setCardAlias(value);
  };

  const onClick = () => {
    setCardInfoList(prev => {
      return [
        ...prev,
        { cardNumbers, expirationDate, ownerName, securityCode, password, cardCompany, cardAlias },
      ];
    });

    navigationToHome();
  };

  return { onChange, onClick, cardAlias, buttonRef };
};
