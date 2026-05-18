import ErrorInfo from '../components/userCard/ErrorInfo';
import Skeleton from '../components/skeleton/Skeleton';
import Empty from '../components/userCard/Empty';
import CardList from '../components/userCard/CardList';
import { useUserCardList } from '../hooks/useUserCardList';

export default function UserCardList() {
  const { cards, isLoading, errorMessage, handleRetry } = useUserCardList();

  return (
    <div
      css={(theme) => ({
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: theme.colors.white,
        width: '376px',
        minHeight: '100vh',
        margin: '0 auto',
        padding: '40px 28px',
      })}
    >
      <p
        css={(theme) => ({
          ...theme.typography.title,
          color: theme.colors.completeText,
        })}
      >
        보유 카드 {cards.length > 0 && <span>({cards.length})</span>}
      </p>
      {!errorMessage && (
        <>
          {isLoading && <Skeleton />}
          {!isLoading && cards.length === 0 && <Empty />}
          {!isLoading && cards.length > 0 && <CardList cards={cards} />}
        </>
      )}
      {errorMessage && <ErrorInfo message={errorMessage} handleRetry={handleRetry} />}
    </div>
  );
}
