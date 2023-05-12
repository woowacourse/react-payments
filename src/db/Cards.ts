import { Card } from './../components/common/Card/types';

export const CardDB = {
  registerCard(card: Card): Promise<unknown> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(localStorage.setItem('cards', JSON.stringify([...this.getCards(), card])));
      }, 2000);
    });
  },

  getCards(): Card[] {
    return JSON.parse(localStorage.getItem('cards') ?? '[]');
  },
};
