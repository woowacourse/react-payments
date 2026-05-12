import styles from './CreditCard.module.css';

import MastercardSvg from '@/core/assets/Mastercard.svg?react';
import VisaSvg from '@/core/assets/Visa.svg?react';

type Bank = 'default';
type BrandType = 'visa' | 'mastercard' | 'diner' | 'amex' | 'union' | 'default';
type CardNumberType = string[] | undefined;
type ExpirationDate = string[] | undefined;

export interface DefaultCreditCardProps {
  card?: keyof typeof cardColors;
  bank: Bank;
  cardBrand: BrandType;
  cardNumberList?: CardNumberType;
  expirationDate?: ExpirationDate;
}

const STAR = '·';

const BrandMap = {
  visa: <VisaSvg />,
  mastercard: <MastercardSvg />,
  default: undefined,
};

const cardColors = {
  bc: '#F04651',
  shinhan: '#0046FF',
  kakao: '#FFE600',
  hyundai: '#000000',
  woori: '#007BC8',
  lotte: '#ED1C24',
  hana: '#009490',
  kb: '#6A6056',
};

export const CreditCard = ({
  // bank = 'default',
  card,
  cardBrand = 'mastercard',
  cardNumberList,
  expirationDate,
}: DefaultCreditCardProps) => {
  const cardColor = cardColors[card as keyof typeof cardColors];

  return (
    <div className={styles.creditCard}>
      <div className={styles.card} style={{ background: cardColor }}>
        <div className={styles.brand}>{BrandMap[cardBrand]}</div>
        <div className={styles.number}>
          {cardNumberList?.map((number, index) => (
            <span key={index}>{index > 1 ? STAR.repeat(number.length) : number}</span>
          ))}
        </div>
        <div className={styles.expirationDate}>
          {expirationDate?.map((number, index) =>
            index === 0 ? <span key={index}>{number}</span> : number && <span key={index}>/{number}</span>,
          )}
        </div>
      </div>
    </div>
  );
};
