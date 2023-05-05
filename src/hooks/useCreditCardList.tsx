/* eslint-disable no-restricted-globals */
import {
  addCard,
  getCards,
  resetCards,
  updateNicknameByNumber,
} from 'api/mockAPI';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as T from 'types';

interface UseCreditCard {
  isLoading: boolean;
  creditCardList: T.CreditCard[];
  loadCardList: () => void;
  saveCreditCard: (creditCard: T.CreditCard) => void;
  initCreditCardList: () => void;
  updateNickname: (number: string, newNickname: string) => void;
}

export const useCreditCardList = (): UseCreditCard => {
  const navigate = useNavigate();
  const [creditCardList, setCreditCardList] = useState<T.CreditCard[]>([]);
  const [isLoading, setLoading] = useState(false);

  const loadCardList = async () => {
    setLoading(true);
    const response = await getCards();
    const cards = JSON.parse(response.data);
    setCreditCardList(cards);
    setLoading(false);
  };

  const saveCreditCard = async (creditCard: T.CreditCard) => {
    setLoading(true);
    const response = await addCard(creditCard);
    const cards = JSON.parse(response.data);
    setCreditCardList(cards);
    setLoading(false);

    navigate('/register-done');
  };

  const initCreditCardList = async () => {
    const isInit = confirm('모든 카드를 초기화합니다.');
    if (isInit) {
      setLoading(true);
      const response = await resetCards();
      const cards = JSON.parse(response.data);
      setCreditCardList(cards);
      setLoading(false);
    }
  };

  const updateNickname = async (number: string, newNickname: string) => {
    setLoading(true);
    const response = await updateNicknameByNumber(number, newNickname);
    const cards = JSON.parse(response.data);
    setCreditCardList(cards);
    setLoading(false);

    navigate('/');
  };

  return {
    isLoading,
    creditCardList,
    loadCardList,
    saveCreditCard,
    initCreditCardList,
    updateNickname,
  };
};
