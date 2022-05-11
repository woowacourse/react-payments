import React from 'react';
import S from '../../pages/card-list/styled';
import { transformCardNumber, transformToMMYY } from '../../utils';
import { Card as TCard } from '../../types';

type Props = {
  marginBottom?: string;
} & TCard;

function Card(props: Props) {
  const { cardNumber, ownerName, expiredPeriod, marginBottom = '0', cardName } = props;
  return (
    <S.Card marginBottom={marginBottom}>
      <div className="type">로이드 카드</div>
      <div className="chip-container">
        <div className="chip" />
      </div>
      <div className="number">{transformCardNumber(cardNumber)}</div>
      <div className="info">
        <S.OwnerName name={ownerName}>{ownerName}</S.OwnerName>
        <span className="expired-period">{expiredPeriod.length > 0 ? transformToMMYY(expiredPeriod) : 'MM / YY'}</span>
      </div>
      {cardName ? <div className="card-name">{cardName}</div> : null}
    </S.Card>
  );
}

export default Card;
