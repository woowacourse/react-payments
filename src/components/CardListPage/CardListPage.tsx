import { LoadingState } from './LoadingState/LoadingState';
import { ErrorState } from './ErrorState/ErrorState';
import { SuccessState } from './SuccessState/SuccessState';
import { Wrapper } from '../PageCard.styles';
import { useEffect, useState } from 'react';
import type { Card } from '../../types/card';
import { fetchCards, deleteCard } from '../../api/cards';

type State = 'idle' | 'loading' | 'success' | 'error';

export function CardListPage() {
  const [state, setState] = useState<State>('idle');
  const [cards, setCards] = useState<Card[]>([]);

  useEffect(() => {
    const controller = new AbortController();
    const loadCards = async () => {
      try {
        const data = await fetchCards(controller.signal);
        setCards(data);
        setState('success');
      } catch (error) {
        if (error instanceof DOMException && error.name === 'AbortError')
          return;
        setState('error');
      }
    };
    loadCards();

    return () => {
      controller.abort();
    };
  }, []);

  const remove = async (id: string) => {
    try {
      if (!window.confirm('이 카드를 삭제하시겠습니까?')) return;
      await deleteCard(id);
      setCards((prev) => prev.filter((card) => card.id !== id));
    } catch {
      setState('error');
    }
  };

  return (
    <Wrapper>
      {state === 'idle' || state === 'loading' ? (
        <LoadingState />
      ) : state === 'success' ? (
        <SuccessState cards={cards} onDelete={remove} />
      ) : state === 'error' ? (
        <ErrorState />
      ) : null}
    </Wrapper>
  );
}
