import { Card } from '../types/card';

let cards: Card[] = [
  {
    id: '550e8400-e29b-41d4-a716-446655440000',
    issuerCode: '31',
    number: '551112******9012',
    expirationDate: '12/28',
    cvc: '123',
  },
];

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
