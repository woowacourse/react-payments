import React from 'react';
import { usePaymentContext } from '../context';
import AddCard from './components/add-card/AddCard';
import S from './styled';

function CardList() {
  const { cardList } = usePaymentContext();
  return (
    <S.CardList>
      <AddCard />
    </S.CardList>
  );
}

export default CardList;
