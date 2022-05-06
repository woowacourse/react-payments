import React from 'react';
import styled from '@emotion/styled';
import { transformNumToBullet, transformToColor } from 'utils';

const OwnerNameSpan = styled.span<{ name: string }>(({ name }) => ({
  fontSize: `${Math.min(14, Math.max(4, 20 - Math.floor(name.length / 2)))}px`,
}));

type Props = {
  firstInputCardNumber: string;
  secondInputCardNumber: string;
  thirdInputCardNumber: string;
  fourthInputCardNumber: string;
  name: string;
  expiredPeriodMonth: string;
  expiredPeriodYear: string;
  cardType: string;
  handleCardClick?: () => void;
};

const CardDiv = styled.div(({ cardColor }: { cardColor: string }) => ({
  width: '208px',
  height: '130px',
  padding: '14px',
  margin: 'auto',
  marginBottom: '20px',
  background: cardColor,
  boxShadow: '3px 3px 5px rgba(0, 0, 0, 0.25)',
  borderRadius: '5px',
  cursor: 'pointer',

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

function Card({
  firstInputCardNumber,
  secondInputCardNumber,
  thirdInputCardNumber,
  fourthInputCardNumber,
  name,
  expiredPeriodMonth,
  expiredPeriodYear,
  cardType,
  handleCardClick,
}: Props) {
  return (
    <>
      <CardDiv onClick={handleCardClick} className="card" cardColor={transformToColor(cardType)}>
        <div className="type">{cardType}</div>
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
          <span className="expired-period">
            {expiredPeriodYear
              ? `${expiredPeriodMonth} / ${expiredPeriodYear}`
              : `${expiredPeriodMonth}`}
          </span>
        </div>
      </CardDiv>
    </>
  );
}

export default Card;
