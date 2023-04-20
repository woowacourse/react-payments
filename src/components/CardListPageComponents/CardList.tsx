import styled from 'styled-components';
import { CardItemInfo } from '../../types/Card';
import CardItem from '../common/CardItem';

interface CardListProps {
  cardList: CardItemInfo[];
}

const CardList = ({ cardList }: CardListProps) => {
  return (
    <CardListContainer>
      {cardList.map((card, index) => (
        <CardItem card={card} key={index} />
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
