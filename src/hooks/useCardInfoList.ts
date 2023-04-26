import { useState } from 'react';
import { CardInfo } from '../types/state';

export const useCardInfoList = () => {
  const [cardInfoList, setCardInfoList] = useState<CardInfo[]>([]);

  return { cardInfoList, setCardInfoList };
};
