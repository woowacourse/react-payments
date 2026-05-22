import { useEffect } from 'react';
import { useAsync } from '../../components/common/commonHooks/useAsync';
import { useNavigate } from 'react-router-dom';
import { cardRepositoryInstance } from '../../repository/cardRepositoryInstance';
import type { Card } from '../../types/card';
import { confirmDialog } from '../../utils/confirmDialog';

export const useCardList = () => {
  const navigate = useNavigate();
  const { run, status, data } = useAsync<Card[]>();

  const fetchCards = async () => {
    await run(() => cardRepositoryInstance.getCards());
  };

  useEffect(() => {
    fetchCards();
  }, [run]);

  const handleCardAdd = () => {
    navigate('/card-add');
  };

  const handleCardDelete = async (id: string) => {
    const isConfirmed = await confirmDialog('카드를 삭제하시겠습니까?');
    if (!isConfirmed) return;

    try {
      await cardRepositoryInstance.deleteCard(id);
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
