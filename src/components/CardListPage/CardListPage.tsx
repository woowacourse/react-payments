import { LoadingState } from './LoadingState/LoadingState';
import { ErrorState } from './ErrorState/ErrorState';
import { SuccessState } from './SuccessState/SuccessState';
import { useEffect } from 'react';
import { useCards } from '../../hooks/useCards';

export function CardListPage() {
  const { state, cards, loadCards, remove } = useCards();

  useEffect(() => {
    const controller = new AbortController();
    loadCards(controller.signal);

    return () => {
      controller.abort();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (state === 'idle' || state === 'loading') return <LoadingState />;
  if (state === 'error') return <ErrorState onRetry={() => loadCards()} />;

  return <SuccessState cards={cards} onDelete={remove} />;
}
