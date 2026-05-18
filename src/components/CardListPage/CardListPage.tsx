import { LoadingState } from './LoadingState/LoadingState';
import { ErrorState } from './ErrorState/ErrorState';
import { SuccessState } from './SuccessState/SuccessState';
import { Wrapper } from '../PageCard.styles';
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

  return (
    <Wrapper>
      {state === 'idle' || state === 'loading' ? (
        <LoadingState />
      ) : state === 'success' ? (
        <SuccessState cards={cards} onDelete={remove} />
      ) : state === 'error' ? (
        <ErrorState onRetry={() => loadCards()} />
      ) : null}
    </Wrapper>
  );
}
