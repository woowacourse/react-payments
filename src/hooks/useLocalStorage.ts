import { Card } from '../types/card';

const LOCAL_STORAGE_KEY = { CARD_LIST: 'cardList' };

export const useLocalStorage = () => {
  const getCardListFromLocalStorage = (): Card[] => {
    const rawCardList = localStorage.getItem(LOCAL_STORAGE_KEY.CARD_LIST);

    return JSON.parse(rawCardList ?? '[]');
  };

  const addCardListToLocalStorage = (cardList: Card[]) => {
    localStorage.setItem(LOCAL_STORAGE_KEY.CARD_LIST, JSON.stringify(cardList));
  };

  return {
    getCardListFromLocalStorage,
    addCardListToLocalStorage,
  };
};
