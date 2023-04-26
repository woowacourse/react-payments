import styled from 'styled-components';
import CardItem from '../common/CardItem';
import type { CardItemInfo } from '../../types/Card';

interface CardListProps {
  cardList: CardItemInfo[];
  cardColor: string;
  bankName: string;
}

const CardList = ({ cardList, cardColor, bankName }: CardListProps) => {
  return (
    <CardListContainer>
      {cardList.map((card, id) => (
        <CardItem
          card={card}
          key={id}
          cardColor={cardColor}
          bankName={bankName}
        />
      ))}
    </CardListContainer>
  );
};

const CardListContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 45px;

  margin-bottom: 45px;

  &:empty {
    margin-bottom: 0;
  }
`;

export default CardList;
