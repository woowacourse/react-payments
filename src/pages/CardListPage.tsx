import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { deleteCard, getCards } from '../api/cards';
import styled from '@emotion/styled';
import { Card } from '../types';
import { ROUTES } from '../constants';
import CardRow from '../components/CardList/CardRow';
import CardListEmpty from '../components/CardList/CardListEmpty';
import CardListError from '../components/CardList/CardListError';
import CardListSkeleton from '../components/CardList/CardListSkeleton';

type CardsFetchState =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; data: Card[] }
  | { status: 'error'; error: Error };

export default function CardListPage() {
  const navigate = useNavigate();
  const [fetchState, setFetchState] = useState<CardsFetchState>({ status: 'idle' });

  const fetchCards = useCallback(async (signal?: AbortSignal) => {
    setFetchState({ status: 'loading' });
    try {
      const data = await getCards(signal);
      setFetchState({ status: 'success', data: data });
    } catch (err) {
      const error = err as Error;
      if (error.name === 'AbortError') return;
      setFetchState({ status: 'error', error: error });
    }
  }, []);

  const refetch = () => fetchCards();

  useEffect(() => {
    const controller = new AbortController();

    fetchCards(controller.signal);

    return () => controller.abort();
  }, [fetchCards]);

  const handleAddCard = () => navigate(ROUTES.HOME);

  const handleDelete = async (id: string) => {
    try {
      await deleteCard(id);
      refetch();
    } catch (err) {
      console.log('삭제 실패', err);
    }
  };
  return (
    <PageContainer>
      <Header>
        보유 카드
        {fetchState.status === 'success' &&
          fetchState.data.length > 0 &&
          ` (${fetchState.data.length})`}
      </Header>

      <Content>
        {fetchState.status === 'idle' && <CardListSkeleton />}
        {fetchState.status === 'loading' && <CardListSkeleton />}

        {fetchState.status === 'success' && fetchState.data.length === 0 && (
          <CardListEmpty onAddCard={handleAddCard} />
        )}

        {fetchState.status === 'success' && fetchState.data.length > 0 && (
          <>
            {fetchState.data.map((card) => (
              <CardRow key={card.id} card={card} onDelete={handleDelete} />
            ))}
            <AddButton onClick={handleAddCard}>+ 카드 추가</AddButton>
          </>
        )}

        {fetchState.status === 'error' && <CardListError onRetry={refetch} />}
      </Content>
    </PageContainer>
  );
}

const PageContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 376px;
  height: 700px;
  padding: 28px;
  box-sizing: border-box;
  background: #ffffff;
  border-radius: 12px;
`;

const Header = styled.h1`
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 18px;
  font-weight: 700;
  line-height: 21.6px;
  color: #353c49;
  margin: 0 0 28px 0;
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const AddButton = styled.button`
  width: 320px;
  height: 40px;
  background: transparent;
  border: 1px dashed #e6e6e6;
  border-radius: 5px;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 13px;
  font-weight: 500;
  color: #8c8c8c;
  cursor: pointer;
`;
