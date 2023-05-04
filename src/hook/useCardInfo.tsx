import { useCallback, useState } from 'react';
import type { CardInfo } from '../types';

const useCardInfo = () => {
  const [cardInfo, setCardInfo] = useState<CardInfo[]>([]);

  const registerNewCard = useCallback((newCardInfo: CardInfo) => {
    setCardInfo(prevCardInfo => [...prevCardInfo, newCardInfo]);
  }, []);

  return { cardInfo, registerNewCard };
};

export default useCardInfo;
