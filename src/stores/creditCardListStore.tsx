/* eslint-disable no-restricted-syntax */
import * as T from 'types';

let creditCardList: T.CreditCard[] = [];
let listeners: Array<() => void> = [];

function emitChange() {
  for (const listener of listeners) {
    listener();
  }
}

export const creditCardListStore = {
  addCreditCard(newCreditCard: T.CreditCard) {
    creditCardList = [...creditCardList, newCreditCard];
    emitChange();
  },
  updateNickname(number: string, newNickname: string) {
    const target = creditCardList.findIndex((c: T.CreditCard) => c.number === number);
    if (target !== -1) {
      creditCardList[target].nickname = newNickname;
      emitChange();
    }
  },
  subscribe(listener: () => void) {
    listeners = [...listeners, listener];
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  },
  getSnapshot() {
    return creditCardList;
  }
};

export default null;
