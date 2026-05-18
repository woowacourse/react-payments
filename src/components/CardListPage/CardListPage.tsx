import { useEffect, useState } from 'react';
import { LoadingState } from './LoadingState/LoadingState';
import { ErrorState } from './ErrorState/ErrorState';
import { SuccessState } from './SuccessState/SuccessState';
import type { Card } from './SuccessState/CardItem/CardItem';
import { Wrapper } from '../PageCard.styles';

type State = 'idle' | 'loading' | 'success' | 'error';

export function CardListPage() {
  const [state, setState] = useState<State>('idle');
  const [savedCard, setSavedCard] = useState<Card[]>([]);

  const loadCards = async () => {
    setState('loading');
    try {
      const response = await fetch('/cards');
      if (!response.ok) throw new Error('카드 목록을 불러오지 못했습니다');
      const data = await response.json();
      setSavedCard(data);
      setState('success');
    } catch {
      setState('error');
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const response = await fetch(`/cards/${id}`, { method: 'DELETE' });
      if (!response.ok) throw new Error('카드 삭제에 실패했습니다');
      await loadCards();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadCards();
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
