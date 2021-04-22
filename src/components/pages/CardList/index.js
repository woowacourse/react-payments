import React from 'react';
import Card from '../../shared/Card';
import CardAddButton from '../../shared/CardAddButton';
import { dummyCards } from '../../../mockData.js';
import * as Style from './style';

const CardList = (props) => {
  return (
    <Style.Root>
      {dummyCards.map((card) => (
        <Style.CardWrapper key={card.key}>
          <Card
            backgroundColor={card.color}
            width={card.width}
            height={card.height}
            owner={card.owner}
            numbers={card.numbers}
            expirationDate={card.expirationDate}
          />
          <Style.CardAlias>{card.alias}</Style.CardAlias>
        </Style.CardWrapper>
      ))}
      <CardAddButton>+</CardAddButton>
    </Style.Root>
  );
};

export default CardList;
