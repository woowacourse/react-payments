import API from '../API';
import { COLLECTION } from '../constants/API';
import { Card } from '../types';

export const requestCards = async () => {
  return API.getAll<Card>(COLLECTION.CARDS);
};

export const requestAddCard = (card: Card) => {
  API.add<Card>(card, COLLECTION.CARDS);
};
