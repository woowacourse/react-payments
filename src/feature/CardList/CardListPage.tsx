import { useEffect, useState } from 'react';
import { deleteCard, getCards } from '../../api/cards';
import type { Card } from '../../domain/card/types/card';
import type { cardFetchStatusType } from './types/cardFetchStatus';
import Title from '../../common/components/Title';
import CardListSkeleton from './components/CardListSkeleton';
import CardListErrorState from './components/CardListErrorState';
import CardListEmptyState from './components/CardListEmptyState';
import CardList from './components/CardList';

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
      setCardFetchErrorMessage(
        error instanceof Error
          ? error.message
          : '카드 목록을 불러오지 못했습니다.',
      );
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
    <div>
      <Title
        value={`보유 카드${cards.length !== 0 ? '(' + cards.length + ')' : ''}`}
      />
      {비동기_상태에_따라_컴포넌트_보여주기()}
    </div>
  );
};

export default CardListPage;
