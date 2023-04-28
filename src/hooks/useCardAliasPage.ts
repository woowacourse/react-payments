import { ChangeEvent, useContext, useEffect, useRef } from 'react';

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
    setCardAlias,
    setCardInfoList,
  } = useContext(CardInfoContext);
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

  return { onChange, onClick, cardAlias, buttonRef };
};
