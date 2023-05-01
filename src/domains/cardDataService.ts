import { Card } from '../types';

const LOCAL_STORAGE_KEY = { CARD_LIST: 'cardList' };

export const cardDataService = {
  getCard(id: string): Card | undefined {
    const storedCardList = this.getCardList();
    for (let index = 0; index < storedCardList.length; index++) {
      if (id === storedCardList[index].id) return storedCardList[index];
    }
  },

  getCardList(): Card[] {
    const rawCardList = localStorage.getItem(LOCAL_STORAGE_KEY.CARD_LIST);

    return JSON.parse(rawCardList ?? '[]');
  },

  addNewCard(card: Card) {
    const storedCardList = this.getCardList();

    localStorage.setItem(LOCAL_STORAGE_KEY.CARD_LIST, JSON.stringify([card, ...storedCardList]));
  },

  addAliasToCard(id: string, alias: string) {
    const storedCardList = this.getCardList();

    for (let index = 0; index < storedCardList.length; index++) {
      if (id === storedCardList[index].id) {
        storedCardList[index].cardAlias = alias;
        break;
      }
    }

    localStorage.setItem(LOCAL_STORAGE_KEY.CARD_LIST, JSON.stringify(storedCardList));
  },
};
