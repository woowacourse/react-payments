import API from '../API';
import { Card } from '../types';

export const requestCards = async () => {
  return API.getAll<Card>('cards');
};

export const requestAddCard = (card: Card) => {
  API.add<Card>(card, 'cards');
};
