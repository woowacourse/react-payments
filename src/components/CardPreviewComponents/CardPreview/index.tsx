import { useMemo, useRef } from 'react';

import { CARD_COLOR_ETC } from '../../../constants';
import { CardInfo } from '../../../modules/useCardInfoReducer';
import CardBackside from '../CardBackside';
import CardFrontside from '../CardFrontside';

import styles from './style.module.css';

export type CardSide = 'front' | 'back';
export interface CardPreviewProps {
  side: CardSide;
  cardInfo: CardInfo;
}

function CardPreview(props: CardPreviewProps) {
  const { side, cardInfo } = props;

  const imgClassName = useMemo(
    () => `${styles.cardImg} ${styles[side]}`,
    [side],
  );
  const imgRef = useRef<HTMLDivElement>(null);
  const imgStyle = useMemo(
    () => ({
      backgroundColor: cardInfo.company?.color || CARD_COLOR_ETC,
    }),
    [cardInfo.company],
  );

  return (
    <div className={styles.cardPreview}>
      <div ref={imgRef} className={imgClassName} style={imgStyle}>
        <div>
          <CardFrontside cardInfo={cardInfo} />
        </div>
        <div>
          <CardBackside cvc={cardInfo.cvc} />
        </div>
      </div>
    </div>
  );
}

export default CardPreview;
