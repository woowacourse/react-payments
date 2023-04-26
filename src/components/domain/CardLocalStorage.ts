import { CardItemInfo } from '../../types/Card';

export const cardLocalStorage = {
  getCard(cardId: number): CardItemInfo | undefined {
    return this.getCardList().find((card) => card.id === cardId);
  },

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
