import styles from './CreditCard.module.css';

import DefaultCardImage from '@/core/assets/defaultCardImage.png';
import MastercardSvg from '@/core/assets/Mastercard.svg?react';
import VisaSvg from '@/core/assets/Visa.svg?react';

type Bank = 'default';
type BrandType = 'visa' | 'mastercard';
type CardNumberType = string[] | undefined;
type ExpirationDate = string[] | undefined;

export interface DefaultCreditCardProps {
  bank: Bank;
  cardBrand: BrandType;
  cardNumberList?: CardNumberType;
  expirationDate?: ExpirationDate;
}

const STAR = '·';

export const CreditCard = ({
  bank = 'default',
  cardBrand = 'mastercard',
  cardNumberList,
  expirationDate,
}: DefaultCreditCardProps) => {
  return (
    <div className={styles.creditCard}>
      <div className={styles.creditCardBrand}>{cardBrand === 'mastercard' ? <MastercardSvg /> : <VisaSvg />}</div>
      <div className={styles.creditCardNumber}>
        {cardNumberList?.map((number, index) => (
          <span key={index}>{index > 1 ? STAR.repeat(number.length) : number}</span>
        ))}
      </div>
      <div className={styles.creditCardExpirationDate}>
        {expirationDate?.map((number, index) => (
          <span key={index}>{number}</span>
        ))}
      </div>
    </div>
  );
};
