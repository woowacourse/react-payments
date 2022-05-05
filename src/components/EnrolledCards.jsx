import React from 'react';

import Card from './Card';
import * as S from 'styles.js';

export default function EnrolledCards({ cards }) {
  return (
    <>
      {cards.map((card) => (
        <S.EnrolledCardWrapper key={card.id}>
          <Card
            cardNumber={card.cardNumber}
            cardExpiration={card.cardExpiration}
            cardOwner={card.cardOwner}
            cardName={card.cardName}
            cardColor={card.cardColor}
            isSmall={true}
          />
          <S.CardNickname>{card.cardNickname}</S.CardNickname>
        </S.EnrolledCardWrapper>
      ))}
    </>
  );
}
