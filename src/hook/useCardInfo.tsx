import { useState } from 'react';
import type { CardInfo } from '../types';

const useCardInfo = () => {
  const [cardInfo, setCardInfo] = useState<CardInfo[]>([]);

  const registerNewCard = ({ cardNumber, expirationDate, cardOwnerName, selectedCard, cardNickName }: CardInfo) => {
    setCardInfo([...cardInfo, { cardNumber, expirationDate, cardOwnerName, selectedCard, cardNickName }]);
  };

  return { cardInfo, registerNewCard };
};

export default useCardInfo;
