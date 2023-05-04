// eslint-disable-next-line
import { useEffect, useState } from 'react';
import * as T from 'types';

interface UseCreditCard {
  creditCardList: T.CreditCard[];
  saveCreditCard: (creditCard: T.CreditCard) => void;
  initCreditCardList: () => void;
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

  const initCreditCardList = () => {
    // eslint-disable-next-line no-restricted-globals
    const isInit = confirm('모든 카드를 초기화합니다.');
    if (isInit) {
      localStorage.setItem('creditCards', '[]');
      setCreditCardList(existCreditCards());
    }
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

  return {
    creditCardList, saveCreditCard, initCreditCardList, updateNickname
  };
};
