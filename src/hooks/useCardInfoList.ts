import { useEffect, useState } from 'react';

import { CardInfo } from '../types/state';
import { getLocalStorageItem, setLocalStorageItem } from '../utils/localStorage';

export const useCardInfoList = () => {
  const [cardInfoList, setCardInfoList] = useState<CardInfo[]>(
    getLocalStorageItem('cardInfoList') ?? []
  );

  useEffect(() => {
    if (cardInfoList.length) {
      setLocalStorageItem('cardInfoList', cardInfoList);
    }
  }, [cardInfoList]);

  return { cardInfoList, setCardInfoList };
};
