import { useEffect, useState } from 'react';
import { LoadingState } from './LoadingState/LoadingState';
import { ErrorState } from './ErrorState/ErrorState';
import { SuccessState } from './SuccessState/SuccessState';
import type { Card } from '../../types/card';
import { fetchCards, deleteCard } from '../../api/cards';
import { Wrapper } from '../PageCard.styles';

type State = 'idle' | 'loading' | 'success' | 'error';

export function CardListPage() {
  const [state, setState] = useState<State>('idle');
  const [savedCard, setSavedCard] = useState<Card[]>([]);

  const loadCards = async () => {
    setState('loading');
    try {
      const data = await fetchCards();
      setSavedCard(data);
      setState('success');
    } catch {
      setState('error');
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteCard(id);
      await loadCards();
    } catch (error) {
      console.error(error);
    }
  };

  if (state === 'idle') setState('loading');

  useEffect(() => {
    let cancelled = false;

    fetchCards()
      .then((cards) => {
        if (cancelled) return;
        setSavedCard(cards);
        setState('success');
      })
      .catch(() => {
        if (cancelled) return;
        setState('error');
      });

    return () => {
      cancelled = true;
    };
  }, []);

  if (state === 'idle') return <></>;
  if (state === 'loading')
    return (
      <Wrapper>
        <LoadingState />
      </Wrapper>
    );
  if (state === 'success')
    return (
      <Wrapper>
        <SuccessState cards={savedCard} onDelete={handleDelete} />
      </Wrapper>
    );
  if (state === 'error')
    return (
      <Wrapper>
        <ErrorState />
      </Wrapper>
    );
}
