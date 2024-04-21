import { useEffect, useState } from 'react';

import IMAGES from '../../assets/images';
import { CARD_COLOR, CARD_MARK, INPUT_LENGTH } from '../../constants';
import { CardInfo } from '../../modules/useCardInfoReducer';

import styles from './style.module.css';

interface CardPreviewProps {
  cardInfo: CardInfo;
}
function CardPreview(props: CardPreviewProps) {
  const { cardInfo } = props;
  const { mark, number, period, userName, color } = cardInfo;
  const SLASH = '/';
  const DOT = '·';
  interface MarkInfo {
    src: string | undefined;
    alt: string | undefined;
  }

  const INITIAL_MARK_INFO: MarkInfo = { src: undefined, alt: undefined };
  const [markInfo, setMarkInfo] = useState<MarkInfo>(INITIAL_MARK_INFO);
  const [cardNumbers, setCardNumbers] = useState<string>();

  const changeNumberToMasking = () => {
    if (!number) return;
    const numberList = number
      .split(',')
      .map((item, index) => {
        if (item && index > 1) {
          return DOT.repeat(INPUT_LENGTH.CARD_NUMBERS);
        }
        return item;
      })
      .join(' ');

    setCardNumbers(numberList);
  };

  useEffect(() => {
    if (!mark) {
      return;
    }
    setMarkInfo(CARD_MARK[mark]);
  }, [mark]);

  useEffect(() => {
    changeNumberToMasking();
  }, [number]);

  return (
    <div className={styles.cardPreview}>
      <div
        className={styles.cardImg}
        style={{ backgroundColor: CARD_COLOR[color] }}
      >
        <div className={styles.cardImgInner}>
          <section className={styles.top}>
            <img src={IMAGES.cardChip} alt="card chip" />
            <img src={markInfo.src} alt={markInfo.alt} />
          </section>
          <section className={styles.info}>
            <div className="card-number">{cardNumbers}</div>
            <div className="period">
              {period.month}
              {period.month && period.year ? SLASH : ''}
              {period.year}
            </div>
            <div className={styles.user}>{userName}</div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default CardPreview;
