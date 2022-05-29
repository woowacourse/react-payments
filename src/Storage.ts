import { Card } from './type';

const STORAGE_KEY = {
  CARD_LIST: 'card-list',
};

const EMPTY_VALUE = {
  CARD_LIST: [],
};

class Storage {
  #cardList: Card[];

  constructor() {
    this.#cardList = this.getInitialValue(STORAGE_KEY.CARD_LIST, EMPTY_VALUE.CARD_LIST);
  }

  get cardList() {
    return this.#cardList;
  }

  getInitialValue(key: string, emptyValue: any) {
    const savedValue: string = localStorage.getItem(key);
    return savedValue ? JSON.parse(savedValue) : emptyValue;
  }

  saveCardList(value: Card[]) {
    localStorage.setItem(STORAGE_KEY.CARD_LIST, JSON.stringify(value));
  }
}

export default new Storage();
