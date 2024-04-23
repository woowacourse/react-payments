import React, { useMemo } from 'react';

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
  const imgStyle = useMemo(
    () => ({
      backgroundColor: cardInfo.company?.color || CARD_COLOR_ETC,
    }),
    [cardInfo.company],
  );
  const imgClassName = useMemo(
    () => `${styles.cardImg} ${styles[side]}`,
    [side],
  );

  return (
    <div className={styles.cardPreview}>
      <div className={imgClassName} style={imgStyle}>
        <div>
          <CardFrontImg cardInfo={cardInfo} />
        </div>
        <div>
          <CardBackImg cvc={cardInfo.cvc} />
        </div>
      </div>
    </div>
  );
}

export default CardPreview;
