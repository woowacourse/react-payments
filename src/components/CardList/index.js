import React, { useEffect, useState } from 'react';
import Card from '../../common/Card';
import { CardListContainer, CardWrapper, CardListTitle } from './index.styles';

const CardList = () => {
  const [cardList, setCardList] = useState([]);
  const getCards = async () => {
    try {
      const response = await fetch('http://localhost:4000/cards')
        .then((response) => response.json())
        .then((result) => result);

      return response;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(async () => {
    setCardList(await getCards());
  }, []);

  return (
    <CardListContainer style={{ overflow: 'scroll' }}>
      <CardListTitle>✨ 나의 카드 목록</CardListTitle>
      {cardList.map((card, index) => (
        <CardWrapper key={index}>
          <Card cardInfo={card} />
        </CardWrapper>
      ))}
    </CardListContainer>
  );
};

export default CardList;
