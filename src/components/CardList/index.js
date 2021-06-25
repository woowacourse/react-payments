import {
  CardListContainer,
  CardListTitle,
  CardWrapper,
  NickName,
} from './index.styles';

import Card from '../../common/Card';
import React from 'react';
import useCard from '../../hooks/useCard';

const CardList = () => {
  const { cardList } = useCard();

  return (
    <CardListContainer>
      <CardListTitle>✨ 나의 카드 목록 ✨</CardListTitle>
      <Card cardMode />
      {cardList.map((card, index) => (
        <CardWrapper key={index}>
          <Card cardInfo={card} disableClick />
          <NickName>{card.cardNickName}</NickName>
        </CardWrapper>
      ))}
    </CardListContainer>
  );
};

export default CardList;
