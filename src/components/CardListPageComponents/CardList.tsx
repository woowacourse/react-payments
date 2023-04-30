import styled from 'styled-components';
import CardItem from '../common/CardItem';
import Title from '../common/Title';
import type { CardItemInfo } from '../../types/Card';

interface CardListProps {
  cardList: CardItemInfo[];
  onOpen: () => void;
}

const CardList = ({ cardList, onOpen }: CardListProps) => {
  return (
    <CardListContainer>
      {cardList.map((card, id) => (
        <>
          <CardItem card={card} key={id} onOpen={onOpen} />
          <Title title={card.cardName} fontSize={14} />
        </>
      ))}
    </CardListContainer>
  );
};

const CardListContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 9px;

  margin-bottom: 45px;

  &:empty {
    margin-bottom: 0;
  }
`;

export default CardList;
