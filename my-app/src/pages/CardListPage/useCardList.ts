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

  const handleCardDelete = async (id: string) => {
    if (!window.confirm('카드를 삭제하시겠습니까?')) {
      return;
    }

    try {
      const response = await fetch(`/cards/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('카드 삭제에 실패했습니다.');
      }

      alert('카드가 삭제되었습니다.');
      fetchCards();
    } catch (error) {
      alert('카드 삭제 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.');
    }
  };

  return {
    status,
    cards: data || [],
    fetchCards,
    handleCardAdd,
    handleCardDelete,
  };
};
