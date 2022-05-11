import React from 'react';
import S from '../../../styled';
import CardBack from './card-back/CardBack';
import CardFront from './card-front/CardFront';

type Props = {
  cardNumber: string;
  name: string;
  expiredPeriod: string;
  cvc: string;
  isActive: boolean;
  color?: string;
  cardName?: string;
  fliped?: boolean;
};

function FlipableCard({ cardNumber, name, expiredPeriod, cvc, isActive, color, cardName, fliped }: Props) {
  const _cardName = isActive ? cardName || '로이드카드' : '';
  const _color = isActive ? color || '#94DACD' : undefined;
  return (
    <S.FlipableCardWrapper>
      <S.FlipableCard fliped={!!fliped}>
        <CardFront
          cardNumber={cardNumber}
          ownerName={name}
          expiredPeriod={expiredPeriod}
          cardName={_cardName}
          color={_color}
        />
        <CardBack cvc={cvc} />
      </S.FlipableCard>
    </S.FlipableCardWrapper>
  );
}

export default FlipableCard;
