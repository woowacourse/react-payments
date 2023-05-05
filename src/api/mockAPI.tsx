/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable no-promise-executor-return */

import { CreditCard } from 'types';

interface Response {
  data: string;
}

export const loadLocalCreditCards = () => JSON.parse(localStorage.getItem('creditCards') || '[]') as CreditCard[];

export const getCards = () => new Promise<Response>((resolve) => setTimeout(() => resolve({
  data: JSON.stringify(loadLocalCreditCards()),
}), 500));

export const addCard = (creditCard: CreditCard) => new Promise<Response>((resolve) => {
  setTimeout(() => {
    const newCardList = [...loadLocalCreditCards(), creditCard];
    const newCardListJSON = JSON.stringify(newCardList);
    localStorage.setItem('creditCards', newCardListJSON);
    resolve({
      data: JSON.stringify(loadLocalCreditCards()),
    });
  }, 3000);
});

export const resetCards = () => new Promise<Response>((resolve) => {
  setTimeout(() => {
    localStorage.setItem('creditCards', '[]');
    resolve({
      data: JSON.stringify(loadLocalCreditCards()),
    });
  }, 3000);
});

export const updateNicknameByNumber = (number: string, newNickname: string) => new Promise<Response>((resolve) => {
  setTimeout(() => {
    const copiedCreditCards = loadLocalCreditCards();
    const targetIndex = copiedCreditCards.findIndex(
      (card) => card.number === number
    );
    if (targetIndex !== -1) {
      copiedCreditCards[targetIndex].nickname = newNickname;
      localStorage.setItem('creditCards', JSON.stringify(copiedCreditCards));
    }
    resolve({
      data: JSON.stringify(loadLocalCreditCards()),
    });
  }, 3000);
});
