import React from 'react';

import { CardNumber } from '../type';
import { CARD_BACKGROUND_COLORS, CARD_FONT_COLOR } from '../utils/constants';
import { changeNumberToMask } from '../utils/processData';
import './Card.css';

type CardProps = {
  cardType: string;
  cardNumber: CardNumber;
  cardOwner: string;
  expired: string;
  securityCode: string;
  cardFlipped?: boolean;
  openCardSelectModal?: React.Dispatch<React.SetStateAction<boolean>>;
};

const Card = ({
  cardType,
  cardNumber,
  cardOwner,
  expired,
  securityCode,
  cardFlipped,
  openCardSelectModal,
}: CardProps) => {
  const flipHandler = () => {
    return cardFlipped ? 'card flipped' : 'card';
  };

  return (
    <>
      <div
        className="flip"
        onClick={() => {
          if (openCardSelectModal) openCardSelectModal(true);
        }}
      >
        <div className={flipHandler()}>
          <div
            className="front"
            style={{
              backgroundColor: CARD_BACKGROUND_COLORS[cardType],
              color: CARD_FONT_COLOR[cardType],
            }}
          >
            <div className="card-track-1">
              <span className="card-type">{cardType}</span>
            </div>
            <div>
              <div className="ic-chip" />
            </div>
            <div className="card-track-3">
              <span>{cardNumber.first === '' ? '카드번호' : cardNumber.first}</span>
              <span>{cardNumber.second}</span>
              <span>{changeNumberToMask(cardNumber.third)}</span>
              <span>{changeNumberToMask(cardNumber.fourth)}</span>
            </div>
            <div className="card-track-4">
              <span className="card-owner-view">{cardOwner === '' ? 'NAME' : cardOwner}</span>
              <span>{expired === '' ? 'MM/YY' : expired}</span>
            </div>
          </div>
          <div
            className="back"
            style={{
              backgroundColor: CARD_BACKGROUND_COLORS[cardType],
              color: CARD_FONT_COLOR[cardType],
            }}
          >
            <div className="card-back-track-1"></div>
            <div className="card-back-track-2">
              <div>* * * * {securityCode}</div>
              {cardOwner}
            </div>
            <div className="card-back-track-3">
              <div></div>
              {expired === '' ? 'MM/YY' : expired}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
