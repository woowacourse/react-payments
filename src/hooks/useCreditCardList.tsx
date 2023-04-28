/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';
import * as T from 'types';

interface UseCreditCard {
  creditCardList: T.CreditCard[];
  saveCreditCard: (creditCard: T.CreditCard) => void;
  updateCreditCardNickname: (number: string, newName: string) => void;
}
const existCreditCards: T.CreditCard[] = (() => JSON.parse(localStorage.getItem('creditCards') || '[]'))();

const findCreditCardIndexByNumber = (
  number: string
) => existCreditCards.findIndex((c: T.CreditCard) => c.number === number);

const useCreditCardList = (): UseCreditCard => {
  const [creditCardList, setCreditCardList] = useState<T.CreditCard[]>(existCreditCards);

  const saveCreditCard = (creditCard: T.CreditCard): void => {
    localStorage.setItem('creditCards', JSON.stringify([...existCreditCards, creditCard]));
  };

  const updateCreditCardNickname = (number: string, newNickname: string) => {
    const targetIndex = findCreditCardIndexByNumber(number);
    if (targetIndex !== -1) {
      const copiedCreditCards = [...existCreditCards];
      copiedCreditCards[targetIndex].nickname = newNickname;
      localStorage.setItem('creditCards', JSON.stringify(copiedCreditCards));

      alert('업데이트 성공!');
    } else {
      alert('업데이트 실패!');
    }
  };

  return { creditCardList, saveCreditCard, updateCreditCardNickname };
};

export default useCreditCardList;
