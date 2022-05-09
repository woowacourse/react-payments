import React from 'react';
import S from '../../../../styled';

type Props = {
  cvc: string;
};

function CardBack({ cvc }: Props) {
  return (
    <S.CardBack className="back">
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
    </S.CardBack>
  );
}

export default CardBack;
