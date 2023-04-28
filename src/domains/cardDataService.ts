import { Card } from '../types';

const LOCAL_STORAGE_KEY = { CARD_LIST: 'cardList' };

export const cardDataService = {
  getCardList(): Card[] {
    const rawCardList = localStorage.getItem(LOCAL_STORAGE_KEY.CARD_LIST);

    return JSON.parse(rawCardList ?? '[]');
  },

  getRecentRegisteredCard(): Card {
    const storedCardList = this.getCardList();
    return storedCardList[0];
  },

  addNewCard(card: Card) {
    const storedCardList = this.getCardList();

    localStorage.setItem(LOCAL_STORAGE_KEY.CARD_LIST, JSON.stringify([card, ...storedCardList]));
  },

  addAliasToRecentCard(alias: string) {
    const storedCardList = this.getCardList();

    if (storedCardList.length === 0) return;
    storedCardList[0].alias = alias;

    localStorage.setItem(LOCAL_STORAGE_KEY.CARD_LIST, JSON.stringify(storedCardList));
  },
};
