import { useEffect, useState } from 'react';
import CreditCardInfo from '../@types/creditCardInfo';
import localStorageUtil from '../utils/localStorageUtil';

interface CreditCardInfoWithId extends CreditCardInfo {
  cardId: number;
}
const initialValue: CreditCardInfoWithId[] = [];

const key = 'card-list';

const useCardList = () => {
  const [cardList, setCardList] = useState(getSavedCardList(key));

  useEffect(() => {
    localStorageUtil.setItem(key, cardList);
  }, [cardList]);

  const saveCard = (cardInfo: CreditCardInfo, after: () => void = () => {}) => {
    const newCard: CreditCardInfoWithId = {
      ...cardInfo,
      cardId: getNextId(cardList),
    };

    setCardList((prev) => {
      after();
      return [...prev, newCard];
    });
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

const getNextId = (dataList: CreditCardInfoWithId[]): number => {
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
