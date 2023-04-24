import { Card } from '../type/card';

export const cardList = {
  isDataExist() {
    return localStorage.getItem('cards') !== null;
  },

  updateData(newData: Card) {
    const currentData = cardList.getData();
    currentData.push(newData);
    localStorage.setItem('cards', JSON.stringify(currentData));
  },

  getData(): Card[] {
    if (cardList.isDataExist()) {
      return JSON.parse(localStorage.getItem('cards') || '');
    } else {
      localStorage.setItem('cards', '[]');
      return JSON.parse('[]');
    }
  },
};
