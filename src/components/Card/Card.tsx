import { CARD_BRANDS } from '../../constants';
import { CardBrandType, CardNumberType, ExpirationType } from '../../types';
import styles from './Card.module.css';

export default function Card({
  company,
  numbers,
  cardLogo,
  expiration
}: {
  company: string;
  numbers: CardNumberType;
  cardLogo: keyof CardBrandType | null;
  expiration: ExpirationType;
}) {
  return (
    <div className={`${styles.card} ${styles[getCardColorClass(company)]}`}>
      <div className={styles.chipWrapper}>
        <div className={styles.chip} />

        {cardLogo && <img className={styles.cardLogo} src={CARD_BRANDS[cardLogo].logo} />}
      </div>
      <div className={styles.numberWrapper}>
        <div className={styles.cardNumberWrapper}>
          {[numbers.first, numbers.second].map(({ value }, index) => (
            <p className={styles.cardNumber} key={index}>
              {value}
            </p>
          ))}

          {[numbers.third, numbers.fourth].map(({ value }, i) => (
            <div key={i} className={styles.dotWrapper}>
              {Array.from({ length: value.length }).map((_, j) => (
                <Dot key={j} />
              ))}
            </div>
          ))}
        </div>
        <div className={styles.cardNumber}>
          {expiration.year.value}
          {expiration.year.value && '/'}
          {expiration.month.value}
        </div>
      </div>
    </div>
  );
}

function Dot() {
  return <div className={styles.dot} />;
}

export function getCardColorClass(company: string) {
  const map: Record<string, string> = {
    BC카드: 'bc',
    신한카드: 'shinhan',
    카카오뱅크: 'kakao',
    현대카드: 'hyundai',
    우리카드: 'woori',
    롯데카드: 'lotte',
    하나카드: 'hana',
    국민카드: 'kookmin'
  };

  return map[company] ?? '';
}
