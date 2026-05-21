import type { CardResponse } from '../types/api';

const STORAGE_KEY = 'react-payments:cards';
let cards: CardResponse[] = [];

function getStorage() {
  if (typeof localStorage === 'undefined') return null;

  return localStorage;
}

function readCards() {
  const storage = getStorage();
  if (!storage) return cards;

  try {
    const storedCards = storage.getItem(STORAGE_KEY);

    return storedCards ? (JSON.parse(storedCards) as CardResponse[]) : [];
  } catch {
    return cards;
  }
}

function writeCards(nextCards: CardResponse[]) {
  cards = nextCards;

  const storage = getStorage();
  if (!storage) return;

  try {
    storage.setItem(STORAGE_KEY, JSON.stringify(nextCards));
  } catch {
    // Keep the in-memory fallback when browser storage is unavailable.
  }
}

export const db = {
  getCards: () => [...readCards()],
  addCard: (card: CardResponse) => {
    writeCards([...readCards(), card]);
    return card;
  },
  deleteCard: (id: string) => {
    writeCards(readCards().filter((card) => card.id !== id));
  },
  reset: () => {
    writeCards([]);
  },
};
