import React from 'react';
import styled from '@emotion/styled';
import S from '../../../card-list/styled';

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

function Card({ cardNumber, name, expiredPeriod, cvc, isActive, color, cardName, fliped }: Props) {
  const cn = isActive ? cardName || '로이드카드' : '';
  const _color = isActive ? color || '#94DACD' : undefined;
  return (
    <FlipContainer>
      <FlipableCard fliped={fliped}>
        <Front className="front" color={_color}>
          <div className="type">{cn}</div>
          <div className="chip-container">
            <div className="chip" />
          </div>
          <div className="number">{cardNumber}</div>
          <div className="info">
            <S.OwnerName name={name}>{name.length > 0 ? name : 'NAME'}</S.OwnerName>
            <span className="expired-period">{expiredPeriod.length > 0 ? expiredPeriod : 'MM / YY'}</span>
          </div>
        </Front>
        <Back className="back">
          <div className="strip" />
          <div className="cvc">
            <label>CVC</label>
            <div className="content">{cvc}</div>
          </div>
          <div className="info">
            <div className="tel">
              <b>카드상담 </b>
              <span>1544-1125</span>
            </div>
            <div className="tel">
              <b>한도조회 </b>
              <span>1544-4729</span>
            </div>
          </div>
        </Back>
      </FlipableCard>
    </FlipContainer>
  );
}

// inspired
// - https://codepen.io/airman5573/pen/RwQboRZ
// - https://codepen.io/darkwing/pen/DrNEzy
const FlipContainer = styled.div(() => ({
  perspective: '1000px',
  width: '208px',
  height: '130px',
  marginBottom: '20px',
}));

const FlipableCard = styled.div(({ fliped }: { fliped?: boolean }) => ({
  transformStyle: 'preserve-3d',
  transition: 'transform 0.6s',
  position: 'relative',
  transform: `${fliped ? 'rotateY(180deg)' : 'rotateY(0deg)'}`,
  '& > .front, & > .back': {
    width: '208px',
    height: '130px',
    position: 'absolute',
    backfaceVisibility: 'hidden',
    borderRadius: '5px',
  },
}));

const Front = styled.div(({ color }: { color?: string }) => ({
  padding: '14px',

  background: color || '#e5e5e5',
  boxShadow: '3px 3px 5px rgba(0, 0, 0, 0.25)',
  borderRadius: '5px',

  // type
  '& .type': {
    fontSize: '10px',
    marginBottom: '14px',
  },

  // chip
  '& .chip': {
    width: '40px',
    height: '26px',
    marginBottom: '16px',

    background: '#cbba64',
    borderRadius: '4px',
  },

  // number
  '& .number': {
    fontSize: '14px',
    fontWeight: '600',
    marginBottom: '6px',
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

const Back = styled.div(() => ({
  backgroundColor: '#9e9e9e',
  transform: 'rotateY(180deg)',
  paddingTop: '15px',
  '.strip': {
    width: '100%',
    height: '26px',
    backgroundColor: 'black',
    marginBottom: '5px',
  },
  '.cvc': {
    width: '88%',
    margin: '0 auto',
    marginBottom: '10px',
    textAlign: 'right',
    label: {
      display: 'block',
      fontSize: '8px',
      textTransform: 'uppercase',
      color: '#fff',
      marginBottom: '4px',
    },
    '.content': {
      padding: '4px',
      height: '18px',
      borderRadius: '5px',
      textAlign: 'right',
      backgroundColor: 'white',
      color: 'black',
      fontSize: '10px',
    },
  },
  '.info': {
    display: 'flex',
    position: 'absolute',
    bottom: '8px',
    left: '10px',
    fontSize: '8px',
    '.tel': {
      paddingRight: '8px',
    },
  },
}));

export default Card;
