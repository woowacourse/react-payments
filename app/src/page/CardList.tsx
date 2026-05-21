import { CardItem } from '../components/card-list/CardItem';
import { CardListSkeleton } from '../components/card-list/CardListSkeleton';
import { CardListEmpty } from '../components/card-list/CardListEmpty';
import { CardListError } from '../components/card-list/CardListError';
import styled from '@emotion/styled';
import { useCardList } from '../hooks/useCardsList';

export function CardList() {
  const { cardListState, fetchCards, handleDelete } = useCardList();

  const renderContent = () => {
    if (cardListState.status === 'idle' || cardListState.status === 'loading')
      return <CardListSkeleton />;
    if (cardListState.status === 'error') return <CardListError onRetry={fetchCards} />;
    if (cardListState.responseData.length === 0) return <CardListEmpty />;
    return <CardItem cards={cardListState.responseData} onDelete={handleDelete} />;
  };

  return (
    <Container>
      <Title>보유 카드</Title>
      {renderContent()}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  padding: 2.5rem 1.75rem 0 1.75rem;
`;

const Title = styled.h1`
  font-weight: 700;
  font-size: 18px;
  margin: 0;
`;
