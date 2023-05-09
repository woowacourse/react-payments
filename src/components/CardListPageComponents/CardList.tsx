import styled from 'styled-components';
import CardItem from './CardItem';
import Title from '../common/Title';
import { useCardList } from '../../hooks/useCardList';
import { Fragment } from 'react';

interface CardListProps {
  onOpen: () => void;
}

const CardList = ({ onOpen }: CardListProps) => {
  const { cardList } = useCardList();

  return (
    <CardListContainer>
      {cardList.map((card, id) => (
        <Fragment key={id}>
          <CardItem card={card} onOpen={onOpen} />
          <Title title={card.cardName} fontSize={14} />
        </Fragment>
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
