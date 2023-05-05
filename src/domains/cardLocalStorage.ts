import type { CardInfo } from '../types';

const LOCAL_STORAGE_KEY = 'cards';

const isCardsInfo = (cards: unknown): cards is CardInfo[] => {
  if (!Array.isArray(cards)) {
    return false;
  }

  const isValid = cards.every(
    card =>
      typeof card.cardNumber === 'string' &&
      typeof card.cardExpirationDate === 'string' &&
      typeof card.cardOwnerName === 'string' &&
      typeof card.cardSecurityCode === 'string' &&
      typeof card.cardPassword === 'string' &&
      (!card.cardName || typeof card.cardName === 'string')
  );

  return isValid;
};

const loadCardsFromLocalStorage = (): CardInfo[] => {
  const rawCards = localStorage.getItem(LOCAL_STORAGE_KEY) || '';
  const emptyCards: CardInfo[] = [];

  try {
    const cards = JSON.parse(rawCards);
    return isCardsInfo(cards) ? cards : emptyCards;
  } catch (error) {
    return emptyCards;
  }
};

const saveCardToLocalStorage = (newCard: CardInfo) => {
  const newCards = [...loadCardsFromLocalStorage(), newCard];
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newCards));
};

export { loadCardsFromLocalStorage, saveCardToLocalStorage };
