import { useCallback, useEffect, useState } from 'react';
import { deleteCard, getCards } from '../../api/cards';
import Title from '../../common/components/Title';
import CardListSkeleton from './components/CardListSkeleton';
import CardListErrorState from './components/CardListErrorState';
import CardListEmptyState from './components/CardListEmptyState';
import CardList from './components/CardList';
import styled from 'styled-components';
import type { CardResponse } from '../../domain/card/types/card';
import type { CardFetchStatusType } from './types/cardFetchStatus';

const CardListPage = () => {
  const [cards, setCards] = useState<CardResponse[]>([]);
  const [cardFetchStatus, setCardFetchStatus] =
    useState<CardFetchStatusType>('loading');

  const [isDeleting, setIsDeleting] = useState(false);

  const loadCards = useCallback(async (signal?: AbortSignal) => {
    try {
      const cards = await getCards(signal);

      setCards(cards);
      setCardFetchStatus('success');
    } catch (error) {
      // Abort인 경우 무시
      if (error instanceof Error && error.name === 'AbortError') return;

      setCardFetchStatus('error');
    }
  }, []);

  const retryFetchCards = async () => {
    setCards([]);
    setCardFetchStatus('loading');

    await loadCards();
  };

  useEffect(() => {
    const controller = new AbortController();

    // eslint-disable-next-line
    loadCards(controller.signal);

    return () => controller.abort();
  }, [loadCards]);

  const handleDeleteCard = async (cardId: string) => {
    if (isDeleting) return;

    const confirmed = window.confirm('카드를 삭제하시겠습니까?');
    if (!confirmed) return;

    try {
      setIsDeleting(true);
      await deleteCard(cardId);
      await loadCards();
    } catch (error) {
      // 네트워크 에러 - 카드 삭제 실패 메세지를 alert로 띄우기
      window.alert(error);
    } finally {
      setIsDeleting(false);
    }
  };

  const 비동기_상태에_따라_컴포넌트_보여주기 = () => {
    if (cardFetchStatus === 'loading') return <CardListSkeleton />;
    if (cardFetchStatus === 'error') {
      return (
        <CardListErrorState
          handleRetryFetchCards={async () => await retryFetchCards()}
        />
      );
    }
    if (cardFetchStatus === 'success' && cards.length === 0) {
      return <CardListEmptyState />;
    }
    return <CardList cards={cards} handleDeleteCard={handleDeleteCard} />;
  };

  return (
    <Wrapper>
      <Container>
        <Title
          value={`보유 카드${
            cards.length !== 0 ? '(' + cards.length + ')' : ''
          }`}
        />
        {비동기_상태에_따라_컴포넌트_보여주기()}
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  min-height: 100vh;

  background-color: #d3d3d3;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 376px;
  height: min(700px, 100vh);
  overflow: hidden;

  padding: 40px 28px;
  gap: 16px;

  background-color: #ffffff;
`;

export default CardListPage;
