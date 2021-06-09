import React from 'react';
import Card from '../../common/Card';
import useCard from '../../hooks/useCard';
import { CardListContainer, CardWrapper, CardListTitle } from './index.styles';

const CardList = () => {
  const { cardList } = useCard();

  return (
    <CardListContainer style={{ overflow: 'scroll' }}>
      <CardListTitle>✨ 나의 카드 목록 ✨</CardListTitle>
      {cardList.map((card, index) => (
        <CardWrapper key={index}>
          <Card cardInfo={card} disableClick />
        </CardWrapper>
      ))}
    </CardListContainer>
  );
};

export default CardList;
