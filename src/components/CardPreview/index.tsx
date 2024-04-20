import { useCallback, useEffect, useMemo, useState } from 'react';

import CardChip from '../../assets/images/cardChip.png';
import { CARD_COLOR, CARD_MARK, CARD_NUMBERS } from '../../constants';
import { CardInfo } from '../../modules/useCardInfoReducer';

import styles from './style.module.css';

interface CardPreviewProps {
  cardInfo: CardInfo;
}

const SLASH = '/';
const DOT = '·';
const COMMA = ',';

function CardPreview(props: CardPreviewProps) {
  const { cardInfo } = props;
  const { mark, number, period, userName, color } = cardInfo;

  const [cardNumbers, setCardNumbers] = useState('');

  const markInfo = useMemo(() => {
    if (!mark) return;

    return CARD_MARK[mark];
  }, [mark]);

  const numberList = useMemo(
    () =>
      number
        ?.split(COMMA)
        .map((item, index) => {
          if (item && index > 1) {
            return DOT.repeat(CARD_NUMBERS.length);
          }
          return item;
        })
        .join(' '),
    [number],
  );

  const changeNumberToMasking = useCallback(() => {
    if (!numberList) return;

    setCardNumbers(numberList);
  }, [numberList]);

  useEffect(() => {
    changeNumberToMasking();
  }, [number, changeNumberToMasking]);

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
