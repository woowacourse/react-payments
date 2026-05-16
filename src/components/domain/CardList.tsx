import type { CardCompany } from '../../types.ts';
import CardItem from './CardItem.tsx';
import { css } from '@emotion/react';

export interface Card {
  cardCompany: CardCompany;
  cardNumbers: string[];
  expirationPeriod: string[];
}

interface CardListProps {
  cards: Card[];
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
`;
