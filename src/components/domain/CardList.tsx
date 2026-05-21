import CardItem from './CardItem.tsx';
import { css } from '@emotion/react';
import type { CardList } from '../../apis/cards/type.ts';

interface CardListProps {
  cards: CardList;
  onDelete: (cardId: string) => void;
}

export default function CardList({ cards, onDelete }: CardListProps) {
  return (
    <ul css={listStyle}>
      {cards.map((card) => (
        <li key={card.id}>
          <CardItem {...card} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
}

const listStyle = css`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;
