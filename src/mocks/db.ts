import type { CardResponse } from '../types/api';

let cards: CardResponse[] = [];

export const db = {
  getCards: () => [...cards],
  addCard: (card: CardResponse) => {
    cards.push(card);
    return card;
  },
  reset: () => {
    cards = [];
  },
};
