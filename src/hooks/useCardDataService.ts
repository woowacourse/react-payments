import { Card } from '../types';
import { useLocalStorage } from './useLocalStorage';

const LOCAL_STORAGE_KEY = { CARD_LIST: 'cardList' };

export const useCardDataService = () => {
  const [storedCardList, setCardList] = useLocalStorage<Card[]>(LOCAL_STORAGE_KEY.CARD_LIST, []);

  const getCard = (id: string): Readonly<Card> | undefined => {
    return storedCardList.find((card) => card.id === id);
  };

  const getCardList = (): Readonly<Card[]> => storedCardList;

  const addNewCard = (card: Card) => {
    setCardList([card, ...storedCardList]);
  };

  const addAliasToCard = (id: string, alias: string) => {
    const updatedCardList = storedCardList.map((card) => {
      if (card.id === id) return { ...card, cardAlias: alias };
      return card;
    });

    setCardList(updatedCardList);
  };

  return { getCard, getCardList, addNewCard, addAliasToCard };
};
