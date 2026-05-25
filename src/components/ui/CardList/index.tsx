import { css } from '@emotion/react';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';
import useCardListData, { type Card } from '../../../hooks/useCardListData';
import CardItem from './CardItem';
import EmptyList from './EmptyList';
import { ROUTES } from '../../../routes';
import Button from '../Button';

interface CardListProps {
  cardsPromise: Promise<Card[]>;
  onCountChange: (count: number) => void;
}

export default function CardList({ cardsPromise, onCountChange }: CardListProps) {
  const navigate = useNavigate();
  const { cardList, deleteCard } = useCardListData(cardsPromise);

  useEffect(() => {
    onCountChange(cardList.length);
  }, [cardList.length, onCountChange]);

  const handleDeleteCard = async (id: string) => {
    if (!window.confirm('카드를 삭제하시겠습니까?')) return;
    try {
      await deleteCard(id);
    } catch {
      window.alert('카드 삭제에 실패했습니다. 다시 시도해주세요.');
    }
  };

  const handleAddCard = () => navigate(ROUTES.addCard);

  return cardList.length === 0 ? (
    <EmptyList onAddCard={handleAddCard} />
  ) : (
    <>
      <ul css={listStyle}>
        {cardList.map((card) => (
          <CardItem key={card.id} {...card} onDeleteCard={handleDeleteCard} />
        ))}
      </ul>
      <Button variant="secondary" onClick={handleAddCard}>
        + 카드 추가
      </Button>
    </>
  );
}

const listStyle = css`
  display: flex;
  flex-direction: column;
  gap: 16px;
  list-style: none;
  padding: 0;
  margin: 0;
  margin-bottom: 16px;
`;
