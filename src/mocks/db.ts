import type { CardResponse } from '../types/api';

let cards: CardResponse[] = [];

export const db = {
  getCards: () => [...cards],
  addCard: (card: CardResponse) => {
    cards.push(card);
    return card;
  },
  deleteCard: (id: string) => {
    cards = cards.filter((card) => card.id !== id);
  },
  reset: () => {
    cards = [];
  },
};
