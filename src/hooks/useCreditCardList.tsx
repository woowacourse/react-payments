/* eslint-disable no-restricted-globals */
/* eslint-disable no-alert */
/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line
import { addCard, existCreditCards, getCards } from 'api/mockAPI';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as T from 'types';

interface UseCreditCard {
  creditCardList: T.CreditCard[];
  saveCreditCard: (creditCard: T.CreditCard) => void;
  initCreditCardList: () => void;
  updateNickname: (number: string, newNickname: string) => void;
}

export const useCreditCardList = (): UseCreditCard => {
  const navigate = useNavigate();
  const [creditCardList, setCreditCardList] = useState<T.CreditCard[]>([]);

  const loadCardList = async () => {
    const response = await getCards();
    const cards = JSON.parse(response.data);
    setCreditCardList(cards);
  };

  useEffect(() => {
    loadCardList();
  }, []);

  const saveCreditCard = async (creditCard: T.CreditCard) => {
    const response = await addCard(creditCard);
    const cards = JSON.parse(response.data);
    setCreditCardList(cards);

    navigate('/register-done');
  };

  const initCreditCardList = () => {
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
