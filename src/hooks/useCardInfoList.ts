import { useEffect, useState } from 'react';

import { CardInfo } from '../types/state';
import { getLocalStorageItem, setLocalStorageItem } from '../utils/localStorage';

export const useCardInfoList = () => {
  const [cardInfoList, setCardInfoList] = useState<CardInfo[]>(
    getLocalStorageItem('cardInfoList') ?? []
  );

  useEffect(() => {
    const handleBeforeUnload = () => {
      setLocalStorageItem('cardInfoList', cardInfoList);
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      setLocalStorageItem('cardInfoList', cardInfoList);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [cardInfoList]);

  return { cardInfoList, setCardInfoList };
};
