import { LoadingState } from './LoadingState/LoadingState';
import { ErrorState } from './ErrorState/ErrorState';
import { SuccessState } from './SuccessState/SuccessState';
import { useCards } from '../../hooks/useCards';

export function CardListPage() {
  const { state, cards, loadCards, remove } = useCards();

  if (state === 'idle' || state === 'loading') return <LoadingState />;
  if (state === 'error') return <ErrorState onRetry={() => loadCards()} />;

  return <SuccessState cards={cards} onDelete={remove} />;
}
