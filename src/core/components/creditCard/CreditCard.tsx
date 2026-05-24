import cn from 'classnames';

import styles from './CreditCard.module.css';

import MastercardSvg from '@/core/assets/Mastercard.svg?react';
import VisaSvg from '@/core/assets/Visa.svg?react';

type Bank = 'default';
type BrandType = 'visa' | 'mastercard' | 'diner' | 'amex' | 'union' | 'default';
type CardNumberType = string[] | undefined;
type ExpirationDate = string[] | undefined;

export interface DefaultCreditCardProps {
  size?: 'small';
  card?: keyof typeof cardColors;
  bank?: Bank;
  cardBrand?: BrandType;
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
  BC: '#F04651',
  SHINHAN: '#0046FF',
  KAKAOBANK: '#FFE600',
  HYUNDAI: '#000000',
  WOORI: '#007BC8',
  LOTTE: '#ED1C24',
  HANA: '#009490',
  KOOKMIN: '#6A6056',
};

export const CreditCard = ({
  // bank = 'default',
  size,
  card,
  cardBrand = 'mastercard',
  cardNumberList,
  expirationDate,
}: DefaultCreditCardProps) => {
  const cardColor = cardColors[card as keyof typeof cardColors];

  return (
    <div className={cn(styles.creditCard, styles[`size-${size}`])}>
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
