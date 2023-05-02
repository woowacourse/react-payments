import { useEffect, useState } from 'react';
import * as T from 'types';

interface UseCreditCard {
  creditCardList: T.CreditCard[];
  saveCreditCard: (creditCard: T.CreditCard) => void;
  updateNickname: (number: string, newNickname: string) => void;
}

const existCreditCards = () => JSON.parse(localStorage.getItem('creditCards') || '[]') as T.CreditCard[];

export const useCreditCardList = (): UseCreditCard => {
  const [creditCardList, setCreditCardList] = useState<T.CreditCard[]>([]);

  useEffect(() => {
    setCreditCardList(existCreditCards());
  }, []);

  const saveCreditCard = (creditCard: T.CreditCard): void => {
    const newCardList = [...existCreditCards(), creditCard];
    localStorage.setItem('creditCards', JSON.stringify(newCardList));
  };

  const updateNickname = (number: string, newNickname: string) => {
    const copiedCreditCards = existCreditCards();
    const targetIndex = copiedCreditCards.findIndex(
      (card) => card.number === number
    );
    if (targetIndex !== -1) {
      copiedCreditCards[targetIndex].nickname = newNickname;
      localStorage.setItem('creditCards', JSON.stringify(copiedCreditCards));
    }
  };

  return { creditCardList, saveCreditCard, updateNickname };
};
