import { useNavigate } from 'react-router-dom';

import { CardList } from './ui/CardList';
import { useCardList } from './model/useCardListPage';
import { CardListLoading } from './ui/CardListLoading';
import { CardListError } from './ui/CardListError';
import { CardListEmpty } from './ui/CardListEmpty';

export const CardListPage = () => {
  const navigate = useNavigate();
  const { cards, status, refetch, removeCard } = useCardList();
  const handleAddCard = () => navigate('/register');

  if (status === 'idle') return <CardListLoading />;
  if (status === 'loading') return <CardListLoading />;
  if (status === 'error') return <CardListError onRetry={() => void refetch()} />;
  if (cards.length === 0) return <CardListEmpty onAddCard={handleAddCard} />;

  return (
    <CardList
      cards={cards}
      onAddCard={handleAddCard}
      onDelete={(cardId) => void removeCard(cardId)}
    />
  );
};
