import React from 'react';
import styled from '@emotion/styled';
import { transformNumToBullet } from '../../../utils';

const CardDiv = styled.div(({ color }: { color?: string }) => ({
  width: '208px',
  height: '130px',
  padding: '14px',
  marginBottom: '20px',

  background: color ? color : '#e5e5e5',
  boxShadow: '3px 3px 5px rgba(0, 0, 0, 0.25)',
  borderRadius: '5px',

  // type
  '& .type': {
    height: '12px',
    fontSize: '10px',
    marginBottom: '14px',
  },

  // chip
  '& .chip': {
    width: '40px',
    height: '26px',
    marginBottom: '18px',

    background: '#cbba64',
    borderRadius: '4px',
  },

  // number
  '& .number': {
    display: 'flex',
  },

  // number
  '& .number-child': {
    width: '50px',
    fontSize: '14px',
    fontWeight: '600',
    marginBottom: '8px',
    minHeight: '16px',
  },

  // info
  '& .info': {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '13px',
    alignItems: 'center',
    '.expired-period': {
      letterSpacing: '-1px',
    },
  },
}));

const OwnerNameSpan = styled.span<{ name: string }>(({ name }) => ({
  fontSize: `${Math.min(14, Math.max(4, 20 - Math.floor(name.length / 2)))}px`,
}));

type Props = {
  firstInputCardNumber: string;
  secondInputCardNumber: string;
  thirdInputCardNumber: string;
  fourthInputCardNumber: string;
  name: string;
  expiredPeriod: string;
  isActive: boolean;
  color?: string;
  cardName?: string;
};

function Card({
  firstInputCardNumber,
  secondInputCardNumber,
  thirdInputCardNumber,
  fourthInputCardNumber,
  name,
  expiredPeriod,
  isActive,
  color,
  cardName,
}: Props) {
  const cn = isActive ? (cardName ? cardName : '로이드카드') : '';
  const _color = isActive ? (color ? color : '#94DACD') : undefined;
  return (
    <CardDiv className="card" color={_color}>
      <div className="type">{cn}</div>
      <div className="chip-container">
        <div className="chip"></div>
      </div>
      <div className="number">
        <div className="number-child">{firstInputCardNumber}</div>
        <div className="number-child">{secondInputCardNumber}</div>
        <div className="number-child">{transformNumToBullet(thirdInputCardNumber)}</div>
        <div className="number-child">{transformNumToBullet(fourthInputCardNumber)}</div>
      </div>
      <div className="info">
        <OwnerNameSpan name={name}>{name}</OwnerNameSpan>
        <span className="expired-period">{expiredPeriod}</span>
      </div>
    </CardDiv>
  );
}

export default Card;
