import React from 'react';
import { Card } from '../../../../../../types';
import S from '../../../../styled';
import SS from '../../../../../../components/styled';

type Props = {
  color?: string;
} & Omit<Card, 'cvc' | 'password'>;

function CardFront(props: Props) {
  const { color, cardType = '로이드 카드', cardNumber, ownerName, expiredPeriod } = props;
  return (
    <S.CardFront color={color} className="front">
      <div className="type">{cardType}</div>
      <div className="chip-container">
        <div className="chip" />
      </div>
      <div className="number">{cardNumber}</div>
      <div className="info">
        <SS.OwnerName name={ownerName}>{ownerName.length > 0 ? ownerName : 'NAME'}</SS.OwnerName>
        <span className="expired-period">{expiredPeriod.length > 0 ? expiredPeriod : 'MM / YY'}</span>
      </div>
    </S.CardFront>
  );
}

export default CardFront;
