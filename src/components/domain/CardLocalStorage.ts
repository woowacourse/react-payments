import { CardItemInfo } from '../../types/Card';

export const cardLocalStorage = {
  getCardList(): CardItemInfo[] {
    return JSON.parse(localStorage.getItem('cardList') ?? '[]');
  },

  addCard(card: CardItemInfo) {
    localStorage.setItem(
      'cardList',
      JSON.stringify([card, ...this.getCardList()])
    );
  },
};
