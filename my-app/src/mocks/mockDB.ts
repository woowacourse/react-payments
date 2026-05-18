import type { Card } from '../types/card';

const STORAGE_KEY = 'mock-cards-DB';

export const mockDB = {
  getCards: (): Card[] => {
    const storedData = localStorage.getItem(STORAGE_KEY);
    return storedData ? JSON.parse(storedData) : [];
  },

  saveCards: (cards: Card[]) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cards));
  },

  addCard: (newCard: Card) => {
    const cards = mockDB.getCards();
    cards.push(newCard);
    mockDB.saveCards(cards);
  },

  deleteCard: (id: string): boolean => {
    const cards = mockDB.getCards();
    const targetIndex = cards.findIndex((card) => card.id === id);
    if (targetIndex !== -1) {
      cards.splice(targetIndex, 1);
      mockDB.saveCards(cards);
      return true;
    }
    return false;
  }
};