import { Card } from '../types/state';

export const generateCardKey = (card: Card) => {
  return card.company.name + Object.values(card.serialNumbers).join('');
};
