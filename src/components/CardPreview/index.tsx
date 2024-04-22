import React, { CSSProperties } from 'react';

import { CARD_COLOR_ETC } from '../../constants';
import { CardInfo } from '../../modules/useCardInfoReducer';
import CardBackImg from '../CardBackImg';
import CardFrontImg from '../CardFrontImg';

import styles from './style.module.css';

export type CardSide = 'front' | 'back';
interface CardPreviewProps {
  side: CardSide;
  cardInfo: CardInfo;
}

function CardPreview(props: CardPreviewProps) {
  const { side, cardInfo } = props;
  const imgStyle = {
    backgroundColor: cardInfo.company?.color || CARD_COLOR_ETC,
  };

  return (
    <div className={styles.cardPreview}>
      <div
        className={styles.cardImg}
        style={side === 'front' ? imgStyle : undefined}
      >
        {side === 'front' ? (
          <CardFrontImg cardInfo={cardInfo} />
        ) : (
          <CardBackImg cvc={cardInfo.cvc} />
        )}
      </div>
    </div>
  );
}

export default CardPreview;
