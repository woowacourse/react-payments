const STORAGE_KEY = {
  CARD_LIST: 'card-list',
};

const EMPTY_VALUE = {
  CARD_LIST: [],
};

class Storage {
  #cardInfoList;

  constructor() {
    this.#cardInfoList = this.getInitialValue(STORAGE_KEY.CARD_LIST, EMPTY_VALUE.CARD_LIST);
  }

  get cardInfoList() {
    return this.#cardInfoList;
  }

  getInitialValue(key, emptyValue) {
    const savedValue = localStorage.getItem(key);
    return savedValue ? JSON.parse(savedValue) : emptyValue;
  }

  saveCardList(value) {
    localStorage.setItem(STORAGE_KEY.CARD_LIST, JSON.stringify(value));
  }
}

export default new Storage();
