import { LOCAL_STORAGE_KEY } from '../constants';
import { Card } from '../type/card';

export const cardList = {
  isDataExist() {
    return localStorage.getItem(LOCAL_STORAGE_KEY.CARD_LIST) !== null;
  },

  updateData(newData: Card) {
    const currentData = cardList.getData();
    currentData.push(newData);
    localStorage.setItem(
      LOCAL_STORAGE_KEY.CARD_LIST,
      JSON.stringify(currentData)
    );
  },

  getData(): Card[] {
    if (cardList.isDataExist()) {
      return JSON.parse(
        localStorage.getItem(LOCAL_STORAGE_KEY.CARD_LIST) || ''
      );
    } else {
      localStorage.setItem(LOCAL_STORAGE_KEY.CARD_LIST, '[]');
      return JSON.parse('[]');
    }
  },
};
