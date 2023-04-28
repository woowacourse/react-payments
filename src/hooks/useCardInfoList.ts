import { useEffect, useState } from 'react';

import { CardInfoList } from '../types/state';
import { getLocalStorageItem, setLocalStorageItem } from '../utils/localStorage';

export const useCardInfoList = () => {
  const [cardInfoList, setCardInfoList] = useState<CardInfoList>(
    getLocalStorageItem('cardInfoList') ?? {}
  );

  useEffect(() => {
    if (cardInfoList && Object.keys(cardInfoList).length) {
      setLocalStorageItem('cardInfoList', cardInfoList);
    }
  }, [cardInfoList]);

  return { cardInfoList, setCardInfoList };
};
