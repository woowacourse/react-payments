import { Card } from './../components/common/Card/types';

export const CardDB = {
  registerCard(card: Card) {
    localStorage.setItem('cards', JSON.stringify([...this.getCards(), card]));
  },

  getCards(): Card[] {
    return JSON.parse(localStorage.getItem('cards') ?? '[]');
  },
};
