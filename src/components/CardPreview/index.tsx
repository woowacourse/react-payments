import { useMemo } from 'react';

import CardChip from '../../assets/images/cardChip.png';
import { CARD_COLOR, CARD_MARK, CARD_NUMBERS } from '../../constants';
import { CardInfo } from '../../modules/useCardInfoReducer';

import styles from './style.module.css';

interface CardPreviewProps {
  cardInfo: CardInfo;
}

const SLASH = '/';
const DOT = '·';

function CardPreview(props: CardPreviewProps) {
  const { cardInfo } = props;
  const { mark, numbers, period, userName, color } = cardInfo;

  const markInfo = useMemo(() => {
    if (!mark) return;

    return CARD_MARK[mark];
  }, [mark]);

  const numberList = useMemo(
    () =>
      numbers?.map((item, index) => {
        if (item && index > 1) {
          return DOT.repeat(CARD_NUMBERS.length);
        }
        return item?.toString();
      }),
    [numbers],
  );

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
              {numberList?.map((item, index) => (
                <span key={`number-${index + 1}`}>{item}</span>
              ))}
            </div>
            <div className={styles.period}>
              <span>{period.month}</span>
              <span>{period.month && period.year ? SLASH : ''}</span>
              <span>{period.year}</span>
            </div>
            <div className={styles.user}>{userName}</div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default CardPreview;
