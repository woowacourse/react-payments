import { useEffect, useState } from 'react';
import { deleteCard, getCards } from '../../api/cards';
import type { Card } from '../../domain/card/types/card';
import type { cardFetchStatusType } from './types/cardFetchStatus';
import Title from '../../common/components/Title';
import CardListSkeleton from './components/CardListSkeleton';
import CardListErrorState from './components/CardListErrorState';
import CardListEmptyState from './components/CardListEmptyState';
import CardList from './components/CardList';
import styled from 'styled-components';

const CardListPage = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [cardFetchStatus, setCardFetchStatus] =
    useState<cardFetchStatusType>('idle');
  const [cardFetchErrorMessage, setCardFetchErrorMessage] = useState('');

  const fetchCards = async () => {
    setCardFetchStatus('idle');

    try {
      setCards([]);
      setCardFetchStatus('loading');

      const cards = await getCards();

      setCards(cards);
      setCardFetchStatus('success');
      setCardFetchErrorMessage('');
    } catch (error) {
      console.log(error);
      setCardFetchStatus('error');
      setCardFetchErrorMessage(error.message);
    }
  };

  const handleDeleteCard = async (cardId: string) => {
    const confirmed = window.confirm('카드를 삭제하시겠습니까?');
    if (!confirmed) return;

    try {
      await deleteCard(cardId);
      await fetchCards();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCards();
  }, []);

  const 비동기_상태에_따라_컴포넌트_보여주기 = () => {
    if (cardFetchStatus === 'loading') return <CardListSkeleton />;
    if (cardFetchStatus === 'error') {
      return <CardListErrorState message={cardFetchErrorMessage} />;
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
