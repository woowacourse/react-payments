import React from "react";
import styled from "@emotion/styled";

const CardDiv = styled.div(() => ({
  width: '208px',
  height: '130px',
  padding: '14px',
  marginBottom: '20px',

  background: '#e5e5e5',
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
    marginBottom: '18px',

    background: '#cbba64',
    borderRadius: '4px',
  },

  // number
  '& .number': {
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
  }
}));

const OwnerNameSpan = styled.span<{ name: string }>(({ name }) => ({
  fontSize: `${Math.min(14, Math.max(4, 20 - Math.floor(name.length/2)))}px`,
}));

type Props = {
  cardNumber: string,
  name: string,
  expiredPeriod: string,
}

function Card({ cardNumber, name, expiredPeriod }: Props) {
  return (
    <>
      <CardDiv className="card">
        <div className="type">로이드카드</div>
        <div className="chip-container">
          <div className="chip"></div>
        </div>
        <div className="number">{cardNumber}</div>
        <div className="info">
          <OwnerNameSpan name={name}>{name}</OwnerNameSpan>
          <span className="expired-period">{expiredPeriod}</span>
        </div>
      </CardDiv>
    </>
  )
}

export default Card;