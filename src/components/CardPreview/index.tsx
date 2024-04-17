import React from 'react';
import useCardInfoReducer, { CardInfo } from '../../modules/useCardInfoReducer';

interface CardPreviewProps {
  cardInfo: CardInfo;
}
function CardPreview(props: CardPreviewProps) {
  const { cardInfo } = props;
  const { mark, number, period, userName } = cardInfo;
  const SLASH = '/';

  return (
    <div>
      <div className="inner">
        <div className="top">
          <div className="chip"></div>
          <div className="mark">{mark}</div>
        </div>
        <div className="info">
          <div className="card-number">{number}</div>
          <div className="period">
            {period.month}
            {SLASH}
            {period.year}
          </div>
          <div className="user">{userName}</div>
        </div>
      </div>
    </div>
  );
}

export default CardPreview;
