import { useEffect, useState } from 'react';
import { CardInfo } from '../types/state';
import { getLocalStorageItem, setLocalStorageItem } from '../utils/localStorage';

export const useCardInfoList = () => {
  const [cardInfoList, setCardInfoList] = useState<CardInfo[]>([]);

  useEffect(() => {
    console.log('?');
    setCardInfoList(getLocalStorageItem('cardInfoList') ?? []);

    return () => {
      setLocalStorageItem('cardInfoList', cardInfoList);
    };
  }, []);

  return { cardInfoList, setCardInfoList };
};
