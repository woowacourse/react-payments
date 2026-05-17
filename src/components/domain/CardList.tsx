import CardItem from './CardItem.tsx';
import { css } from '@emotion/react';
import type { CardList } from '../../apis/cards/type.ts';

interface CardListProps {
  cards: CardList;
}

export default function CardList({ cards }: CardListProps) {
  return (
    <ul css={listStyle}>
      {cards.map((card) => (
        <li key={card.cardNumbers.join('')}>
          <CardItem {...card} />
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
