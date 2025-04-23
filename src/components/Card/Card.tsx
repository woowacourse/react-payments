import { CARD_BRANDS } from '../../constants';
import { CardNumberType, ExpirationType } from '../../types';
import styles from './Card.module.css';

export default function Card({ company, numbers, expiration }: { company: string; numbers: CardNumberType; expiration: ExpirationType }) {
  const cardLogo = getCardBrand(numbers.first.value);
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
  const CARD_INFO: Record<string, string> = {
    BC카드: 'bc',
    신한카드: 'shinhan',
    카카오뱅크: 'kakao',
    현대카드: 'hyundai',
    우리카드: 'woori',
    롯데카드: 'lotte',
    하나카드: 'hana',
    국민카드: 'kookmin'
  };

  return CARD_INFO[company] ?? '';
}
const getCardBrand = (value: string) => {
  const brand = Object.values(CARD_BRANDS).find(({ match }) => match(value));
  return brand?.name ?? null;
};
