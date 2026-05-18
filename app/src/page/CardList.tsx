import type { AsyncState } from '../types/asyncState';
import { getCards } from '../api/cardsAPI';
import { useEffect, useState } from 'react';
import type { Card } from '../types/card';
import { CardItem } from '../components/card-list/CardItem';
import { CardListSkeleton } from '../components/card-list/CardListSkeleton';
import { CardListEmpty } from '../components/card-list/CardListEmpty';
import { CardListError } from '../components/card-list/CardListError';
import styled from '@emotion/styled';

export function CardList() {
  const [cardListState, setCardListState] = useState<AsyncState<Card[]>>({ status: 'idle' });

  useEffect(() => {
    const fetchCards = async () => {
      try {
        setCardListState({ status: 'loading' });
        const responseData = await getCards();
        setCardListState({ status: 'success', responseData: responseData });
      } catch (err) {
        if (err instanceof Error) {
          setCardListState({ status: 'error', message: err.message });
        }
      }
    };

    fetchCards();
  }, []);

  const renderContent = () => {
    // if (cardListState.status === 'idle' || cardListState.status === 'loading')
    //   return <CardListSkeleton />;
    // if (cardListState.status === 'error') return <CardListError />;
    // if (cardListState.responseData.length === 0) return <CardListEmpty />;
    return <CardListEmpty />;
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
