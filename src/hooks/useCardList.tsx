import CreditCardInfo from '../@types/creditCardInfo';
import localStorageUtil from '../utils/localStorageUtil';

interface CreditCardInfoWithId extends CreditCardInfo {
  cardId: number;
}

const key = 'card-list';
const initialValue: CreditCardInfo[] = [];

const getSavedCardList = (): CreditCardInfo[] => {
  try {
    return localStorageUtil.getItem(key);
  } catch {
    return initialValue;
  }
};

const getNextId = (dataList: any[]): number => {
  if (dataList.length === 0) return 1;

  return (
    Math.max(
      ...dataList.map((data) => {
        return data.cardId;
      })
    ) + 1
  );
};

const useCardList = () => {
  const savedCardList = getSavedCardList();

  const saveCard = (cardInfo: CreditCardInfo) => {
    const newCard: CreditCardInfoWithId = {
      ...cardInfo,
      cardId: getNextId(savedCardList),
    };

    const newCardList = [...savedCardList, newCard];

    localStorageUtil.setItem(key, newCardList);
  };

  return { savedCardList, saveCard };
};

export default useCardList;
