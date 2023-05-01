import { useContext } from 'react';
import styled from 'styled-components';
import CardItem from './CardItem';
import Title from '../common/Title';
import { CardContext } from '../../context/CardContext';

interface CardListProps {
  onOpen: () => void;
}

const CardList = ({ onOpen }: CardListProps) => {
  const { cardList } = useContext(CardContext);

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
