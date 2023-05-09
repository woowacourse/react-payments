import { Card } from './../components/common/Card/types';
import mockData from '../initialData/mockData.json';

const CardDB = {
  setInitialData() {
    const isEmpty = localStorage.getItem('cards') === null;

    if (!isEmpty) return;

    localStorage.setItem('cards', JSON.stringify(mockData));
  },

  registerCard(card: Card) {
    localStorage.setItem('cards', JSON.stringify([...this.getCards(), card]));
  },

  getCards(): Card[] {
    return JSON.parse(localStorage.getItem('cards') ?? '[]');
  },
};

export default CardDB;
