import cn from 'classnames';
import styles from './CreditCard.module.css';

import MastercardSvg from '@/core/assets/Mastercard.svg?react';
import VisaSvg from '@/core/assets/Visa.svg?react';

type Bank = 'default';
type BrandType = 'visa' | 'mastercard' | 'default';
type CardNumberType = string[] | undefined;
type ExpirationDate = string[] | undefined;

export interface DefaultCreditCardProps {
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

export const CreditCard = ({
  bank = 'default',
  cardBrand = 'mastercard',
  cardNumberList,
  expirationDate,
}: DefaultCreditCardProps) => {
  return (
    <div className={styles.creditCard}>
      <div className={styles.card}>
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
