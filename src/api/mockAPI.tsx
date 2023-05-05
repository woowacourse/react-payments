/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable max-len */

import { CreditCard } from 'types';

/* eslint-disable no-promise-executor-return */
interface Response {
  data: string;
}

const existCreditCardsJSON = localStorage.getItem('creditCards') || '[]';
export const existCreditCards = () => JSON.parse(existCreditCardsJSON) as CreditCard[];

export const getCards = () => new Promise<Response>((resolve) => setTimeout(() => resolve({
  data: existCreditCardsJSON,
}), 500));

// export const addCard = (creditCard: CreditCard) => new Promise((resolve) => setTimeout(() => resolve({
//   data: JSON.stringify([...existCreditCards(), creditCard]),
// }), 500));
