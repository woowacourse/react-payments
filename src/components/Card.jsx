import React from 'react';

import * as S from 'styles.js';

export default function Card({ cardNumber, cardOwner, cardExpiration, cardName, color }) {
  const cardExpirationContent = () =>
    cardExpiration[0] || cardExpiration[1] ? cardExpiration.join('/') : 'MM/YY';

  return (
    <S.SmallCard color={color}>
      <S.CardTop>
        <S.CardText>{cardName}</S.CardText>
      </S.CardTop>
      <S.CardMiddle>
        <S.SmallCardChip></S.SmallCardChip>
      </S.CardMiddle>
      <S.CardBottom>
        <S.CardBottomNumber>
          <S.CardNumber>{cardNumber[0]}</S.CardNumber>
          <S.CardNumber>{cardNumber[1]}</S.CardNumber>
          <S.CardNumber>{'•'.repeat(cardNumber[2].length)}</S.CardNumber>
          <S.CardNumber>{'•'.repeat(cardNumber[3].length)}</S.CardNumber>
        </S.CardBottomNumber>
        <S.CardBottomInfo>
          <S.CardTextEllipsis>{cardOwner || 'NAME'}</S.CardTextEllipsis>
          <S.CardText>{cardExpirationContent()}</S.CardText>
        </S.CardBottomInfo>
      </S.CardBottom>
    </S.SmallCard>
  );
}
