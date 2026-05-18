import { Card } from '../types/card';

let cards: Card[] = [];

export const cardDB = {
  list: (): Card[] => cards,

  add: (card: Omit<Card, 'id'>): Card => {
    const newCard: Card = { id: crypto.randomUUID(), ...card };
    cards = [...cards, newCard];
    return newCard;
  },

  remove: (id: string): void => {
    cards = cards.filter((card) => card.id !== id);
  },
};
