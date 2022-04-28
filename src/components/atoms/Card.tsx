import React from "react";
import { css } from "@emotion/react";
import { useAppState } from "../../hooks/hooks";
import { transformNumToBullet } from "../../utils";

const style = css({
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
  },
});

function Card() {
  const { cardNumber, name, expiredPeriod } = useAppState();

  const transform = (str: string) => {
    return [4, 8, 12 ,16].map((index) => {
      const part = str.slice(index-4, index);
      if (index >= 12) {
        return transformNumToBullet(part);
      }
      return str.slice(index-4, index);
    }).filter((part: string) => part).join(' ');
  }

  const ownerStyle = css({
    fontSize: `${Math.min(14, Math.max(4, 20 - Math.floor(name.length/2)))}px`,
  });

  return (
    <>
      <div className="card" css={style}>
        <div className="type">로이드카드</div>
        <div className="chip-container">
          <div className="chip"></div>
        </div>
        <div className="number">{transform(cardNumber)}</div>
        <div className="info">
          <span className="owner" css={ownerStyle}>{name}</span>
          <span className="expired-period">{expiredPeriod}</span>
        </div>
      </div>
    </>
  )
}

export default Card;