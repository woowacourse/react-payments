import { useEffect } from 'react';
import { useAsync } from '../../components/common/commonHooks/useAsync';
import { useNavigate } from 'react-router-dom';

export interface Card {
  id: string;
  issuerCode: string;
  number: string;
  expirationDate: string;
}

export const useCardList = () => {
  const navigate = useNavigate();
  const { run, status, data } = useAsync<Card[]>();

  const fetchCards = async () => {
    await run(async () => {
      const response = await fetch('/cards');
      if (!response.ok) {
        throw new Error('카드 목록 불러오기 실패!');
      }
      return response.json();
    });
  };

  useEffect(() => {
    fetchCards();
  }, [run]);

  const handleCardAdd = () => {
    navigate('/card-add');
  };

  return { status, cards: data || [], fetchCards, handleCardAdd };
};
