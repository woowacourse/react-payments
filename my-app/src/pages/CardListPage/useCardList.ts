import { useEffect } from 'react';
import { useAsync } from '../../components/common/commonHooks/useAsync';
import { useNavigate } from 'react-router-dom';
import { cardRepositoryInstance } from '../../repository/cardRepositoryInstance';
import type { Card } from '../../types/card';
import { confirmDialog } from '../../utils/confirmDialog';

export const useCardList = () => {
  const navigate = useNavigate();
  const {
    run: runFetch,
    status: fetchStatus,
    data: cards,
  } = useAsync<Card[]>();
  const {
    run: runDelete,
    status: deleteStatus,
    error: deleteError,
  } = useAsync<void>();

  const fetchCards = async () => {
    await runFetch(() => cardRepositoryInstance.getCards());
  };

  useEffect(() => {
    fetchCards();
  }, [runFetch]);

  useEffect(() => {
    if (deleteStatus === 'error') {
      alert('카드 삭제에 실패했습니다!');
    }

    if (deleteStatus === 'success') {
      alert('카드가 성공적으로 삭제되었습니다.');
      fetchCards();
    }
  }, [deleteStatus, deleteError]);

  const handleCardAdd = () => {
    navigate('/card-add');
  };

  const handleCardDelete = async (id: string) => {
    if (deleteStatus === 'loading') return;

    const isConfirmed = await confirmDialog('카드를 삭제하시겠습니까?');
    if (!isConfirmed) return;

    await runDelete(() => cardRepositoryInstance.deleteCard(id));
  };

  return {
    fetchStatus,
    cards: cards || [],
    fetchCards,
    handleCardAdd,
    handleCardDelete,
  };
};
