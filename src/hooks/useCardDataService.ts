import { Card } from '../types';
import { useLocalStorage } from './useLocalStorage';

const LOCAL_STORAGE_KEY = { CARD_LIST: 'cardList' };

export const useCardDataService = () => {
  const [storedCardList, setCardList] = useLocalStorage<Card[]>(LOCAL_STORAGE_KEY.CARD_LIST, []);

  const getCard = (id: string): Readonly<Card> | undefined => {
    for (let index = 0; index < storedCardList.length; index++) {
      if (id === storedCardList[index].id) return storedCardList[index];
    }
  };

  const getCardList = (): Readonly<Card[]> => storedCardList;

  const addNewCard = (card: Card) => {
    setCardList([card, ...storedCardList]);
  };

  const addAliasToCard = (id: string, alias: string) => {
    for (let index = 0; index < storedCardList.length; index++) {
      if (id !== storedCardList[index].id) continue;

      storedCardList[index].cardAlias = alias;
      setCardList(storedCardList);

      break;
    }
  };

  return { getCard, getCardList, addNewCard, addAliasToCard };
};
