import React from 'react';
import S from '../../styled';
import { Card as TCard } from '../../types';

type Props = {
  marginBottom: string;
} & TCard;

function Card(props: Props) {
  const { cardNumber, ownerName, expiredPeriod, marginBottom = '0' } = props;
  return (
    <S.Card marginBottom={marginBottom}>
      <div className="type">로이드 카드</div>
      <div className="chip-container">
        <div className="chip" />
      </div>
      <div className="number">{cardNumber}</div>
      <div className="info">
        <S.OwnerName name={ownerName}>{ownerName}</S.OwnerName>
        <span className="expired-period">{expiredPeriod.length > 0 ? expiredPeriod : 'MM / YY'}</span>
      </div>
    </S.Card>
  );
}

export default Card;
