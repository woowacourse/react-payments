/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable max-len */

import { CreditCard } from 'types';

/* eslint-disable no-promise-executor-return */
interface Response {
  data: string;
}

export const existCreditCards = () => JSON.parse(localStorage.getItem('creditCards') || '[]') as CreditCard[];

export const getCards = () => new Promise<Response>((resolve) => setTimeout(() => resolve({
  data: JSON.stringify(existCreditCards()),
}), 500));

export const addCard = (creditCard: CreditCard) => new Promise<Response>((resolve) => {
  setTimeout(() => {
    const newCardList = [...existCreditCards(), creditCard];
    const newCardListJSON = JSON.stringify(newCardList);
    localStorage.setItem('creditCards', newCardListJSON);
    resolve({
      data: newCardListJSON,
    });
  }, 3000);
});
