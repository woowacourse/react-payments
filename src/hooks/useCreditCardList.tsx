import { useEffect, useState } from 'react';
import * as T from 'types';

interface UseCreditCard {
  creditCardList: T.CreditCard[];
  saveCreditCard: (creditCard: T.CreditCard) => void;
  findCreditCardByNumber: (number: string) => T.CreditCard | undefined;
}

const useCreditCardList = (): UseCreditCard => {
  const [creditCardList, setCreditCardList] = useState<T.CreditCard[]>([]);

  const existCreditCards = (() => JSON.parse(localStorage.getItem('creditCards') || '[]'))();

  const saveCreditCard = (creditCard: T.CreditCard): void => {
    localStorage.setItem('creditCards', JSON.stringify([...existCreditCards, creditCard]));
  };

  const findCreditCardByNumber = (
    number: string
  ) => creditCardList.find((c: T.CreditCard) => c.number === number);

  useEffect(() => {
    setCreditCardList(existCreditCards);
  }, []);

  return { creditCardList, saveCreditCard, findCreditCardByNumber };
};

export default useCreditCardList;
