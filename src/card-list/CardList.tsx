import React from 'react';
import { usePaymentContext } from '../context';
import AddCard from './components/add-card/AddCard';
import Card from '../shared/components/card/Card';
import S from './styled';

function CardList() {
  const { cardList } = usePaymentContext();
  return (
    <S.CardList>
      <AddCard marginBottom={cardList.length > 0 ? '20px' : '0'} />
      {cardList.map((card, index) => (
        <Card key={index} marginBottom={card.cardName ? '50px' : '20px'} {...card} />
      ))}
    </S.CardList>
  );
}

export default CardList;
