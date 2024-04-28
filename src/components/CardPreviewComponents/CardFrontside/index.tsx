import { useMemo } from 'react';

import CardChip from '../../../assets/images/cardChip.png';
import { CARD_COMPANY, CARD_MARK, CARD_NUMBERS } from '../../../constants';
import { CardInfo } from '../../../modules/useCardInfoReducer';

import styles from './style.module.css';

export interface CardFrontsideProps {
  cardInfo: CardInfo;
}

const SLASH = '/';
const DOT = '·';

function CardFrontside(props: CardFrontsideProps) {
  const { cardInfo } = props;
  const { mark, numbers, period, userName, company } = cardInfo;

  const fontStyle = useMemo(() => {
    const isNeedBlackFont = company?.name === CARD_COMPANY.get('kakao')?.name;
    return { color: isNeedBlackFont ? '#322C2B' : 'inherit' };
  }, [company]);

  const cardCompany = useMemo(
    () =>
      company?.name === CARD_COMPANY.get('etc')?.name ? '' : company?.name,
    [company],
  );
  const markInfo = useMemo(() => CARD_MARK[mark || 'etc'], [mark]);

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
    <div className={styles.cardFrontside}>
      <section className={styles.top}>
        <img src={CardChip} alt="card chip" />
        <img src={markInfo?.src} alt={markInfo?.alt} />
      </section>
      <section className={styles.info} style={fontStyle}>
        <p className={styles.cardCompany}>{cardCompany}</p>
        <div className={styles.cardNumber}>
          {numberList?.map((item, index) => (
            <span key={`number-${index + 1}`}>{item}</span>
          ))}
        </div>
        <div className={styles.periodAndName}>
          <div className={styles.period}>
            <span>{period?.month}</span>
            <span>{period?.month && period?.year ? SLASH : ''}</span>
            <span>{period?.year}</span>
          </div>
          <div className={styles.user}>{userName}</div>
        </div>
      </section>
    </div>
  );
}

export default CardFrontside;
