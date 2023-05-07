import { useState } from 'react';
import CreditCardInfo from '../@types/creditCardInfo';

import localStorageUtil from '../utils/localStorageUtil';
import { CreditCardInfoWithId } from '../@types/creditCardInfoWithId';

const initialValue: CreditCardInfoWithId[] = [];

const key = 'card-list';

const useCardList = () => {
  const [cardList, setCardList] = useState<CreditCardInfoWithId[]>(() => getSavedCardList(key));

  const saveCard = (cardInfo: CreditCardInfo) => {
    const newCardList = [
      ...cardList,
      {
        ...cardInfo,
        cardId: calcNextId(cardList),
      },
    ];

    localStorageUtil.setItem(key, newCardList);
    setCardList(newCardList);
  };

  return { cardList, saveCard };
};

const getSavedCardList = (key: string): CreditCardInfoWithId[] => {
  try {
    return localStorageUtil.getItem(key);
  } catch {
    return initialValue;
  }
};

const calcNextId = (dataList: CreditCardInfoWithId[]): number => {
  if (dataList.length === 0) return 1;

  return (
    Math.max(
      ...dataList.map((data) => {
        return data.cardId;
      })
    ) + 1
  );
};

export default useCardList;
