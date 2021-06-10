import React from 'react';
import Card from '../../common/Card';
import useCard from '../../hooks/useCard';
import {
  CardListContainer,
  CardWrapper,
  CardListTitle,
  NickName,
} from './index.styles';

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
