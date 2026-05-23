import type { Card } from '@/entities/card/model/card';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CardListLoading } from './ui/CardListLoading';
import { CardListError } from './ui/CardListError';
import { deleteCard, getCards } from '@/entities/card/api/cards';
import { CardListEmpty } from './ui/CardListEmpty';
import { CardList } from './ui/CardList';

type CardListPageState =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; cards: Card[] }
  | { status: 'error'; message: string };

export const CardListPage = () => {
  const navigate = useNavigate();
  const [state, setState] = useState<CardListPageState>({ status: 'idle' });

  useEffect(() => {
    let ignore = false;

    const loadInitialCards = async () => {
      try {
        const cards = await getCards();

        if (!ignore) setState({ status: 'success', cards });
      } catch {
        if (!ignore)
          setState({
            status: 'error',
            message: '카드 목록을 불러올 수 없어요',
          });
      }
    };

    loadInitialCards();

    return () => {
      ignore = true;
    };
  }, []);

  const refetch = async () => {
    setState({ status: 'loading' });

    try {
      const cards = await getCards();
      setState({ status: 'success', cards });
    } catch {
      setState({
        status: 'error',
        message: '카드 목록을 불러올 수 없어요',
      });
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm('카드를 삭제하시겠습니까?')) return;

    await deleteCard(id);
    await refetch();
  };

  const handleAddCard = () => {
    navigate('/register');
  };

  if (state.status === 'idle' || state.status === 'loading') return <CardListLoading />;
  if (state.status === 'error') return <CardListError onRetry={() => void refetch()} />;
  if (state.cards.length === 0) return <CardListEmpty onAddCard={handleAddCard} />;

  return (
    <CardList
      cards={state.cards}
      onAddCard={handleAddCard}
      onDelete={(cardId) => void handleDelete(cardId)}
    />
  );
};
