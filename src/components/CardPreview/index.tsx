import { useMemo } from 'react';

import CardChip from '../../assets/images/cardChip.png';
import { CARD_COLOR, CARD_MARK } from '../../constants';
import { CardInfo } from '../../modules/useCardInfoReducer';

import styles from './style.module.css';

interface CardPreviewProps {
  cardInfo: CardInfo;
}

const SLASH = '/';
const COMMA = ',';

function CardPreview(props: CardPreviewProps) {
  const { cardInfo } = props;
  const { mark, number, period, userName, color } = cardInfo;

  const markInfo = useMemo(() => {
    if (!mark) return;

    return CARD_MARK[mark];
  }, [mark]);

  return (
    <div className={styles.cardPreview}>
      <div
        className={styles.cardImg}
        style={{ backgroundColor: CARD_COLOR[color] }}
      >
        <div className={styles.cardImgInner}>
          <section className={styles.top}>
            <img src={CardChip} alt="card chip" />
            <img src={markInfo?.src} alt={markInfo?.alt} />
          </section>
          <section className={styles.info}>
            <div className={styles.cardNumber}>
              {number
                ?.split(COMMA)
                .map((item, index) => (
                  <span key={`card-number-${index + 1}`}>{item}</span>
                ))}
            </div>
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
