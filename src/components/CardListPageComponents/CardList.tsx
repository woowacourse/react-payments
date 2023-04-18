import styled from 'styled-components';
import { Card } from '../../types/Card';
import CardItem from '../common/CardItem';

interface CardListProps {
  cardList: Card[];
}

const CardList = ({ cardList }: CardListProps) => {
  return (
    <CardListContainer>
      {cardList.map((card) => (
        <CardItem card={card} />
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
