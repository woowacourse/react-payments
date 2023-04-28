import { useContext, useEffect, useRef } from 'react';

import CardInfoContext from '../contexts/CardInfoContext';

import { generateCardKey } from '../domains/keyGenerator';

export const useCardAliasPage = () => {
  const {
    cardNumbers,
    expirationDate,
    ownerName,
    securityCode,
    password,
    cardCompany,
    cardAlias,
    setCardInfoList,
  } = useContext(CardInfoContext);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (cardAlias && cardAlias?.length >= 15) {
      buttonRef.current?.focus();
    }
  }, [cardAlias]);

  const onClick = () => {
    setCardInfoList(prev => {
      const cardInfo = {
        cardNumbers,
        expirationDate,
        ownerName,
        securityCode,
        password,
        cardCompany,
        cardAlias,
      };
      const key = generateCardKey(cardInfo);

      return {
        ...prev,
        [key]: cardInfo,
      };
    });
  };

  return { onClick, buttonRef };
};
