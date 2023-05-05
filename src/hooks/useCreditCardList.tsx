/* eslint-disable no-restricted-globals */
import {
  addCard, getCards, resetCards, updateNicknameByNumber
} from 'api/mockAPI';
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

  const saveCreditCard = async (creditCard: T.CreditCard) => {
    const response = await addCard(creditCard);
    const cards = JSON.parse(response.data);
    setCreditCardList(cards);

    navigate('/register-done');
  };

  const initCreditCardList = async () => {
    const isInit = confirm('모든 카드를 초기화합니다.');
    if (isInit) {
      const response = await resetCards();
      const cards = JSON.parse(response.data);
      setCreditCardList(cards);
    }
  };

  const updateNickname = async (number: string, newNickname: string) => {
    const response = await updateNicknameByNumber(number, newNickname);
    const cards = JSON.parse(response.data);
    setCreditCardList(cards);

    navigate('/');
  };

  useEffect(() => {
    loadCardList();
  }, []);

  return {
    creditCardList, saveCreditCard, initCreditCardList, updateNickname
  };
};
