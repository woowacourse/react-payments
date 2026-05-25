import Card from './Card';
import type { CardResponse } from '../../types/cardStausTypes';
import { useNavigate } from 'react-router-dom';

type CardListProps = {
  cards: CardResponse[];
  handleDelete: (id: string) => void;
};

export default function CardList({ cards, handleDelete }: CardListProps) {
  const navigate = useNavigate();

  return (
    <div
      css={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '16px',
      }}
    >
      {cards.map((card) => {
        return <Card key={card.id} card={card} handleDelete={handleDelete} />;
      })}
      <button
        css={(theme) => ({
          width: '100%',
          height: '44px',
          borderRadius: '5px',
          ...theme.typography.info,
          color: theme.colors.cardInfo,
          textAlign: 'center',
          border: `1px dashed ${theme.colors.cardSectionBorder}`,
        })}
        onClick={() => navigate('/register')}
      >
        + 카드 추가
      </button>
    </div>
  );
}
