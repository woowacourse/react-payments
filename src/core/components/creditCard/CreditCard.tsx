import cn from 'classnames';
import styles from './CreditCard.module.css';

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
    <div className={cn(styles.creditCard, bank === 'default' ? 'default' : '')}>
      <div className={cn(styles.creditCardBrand)}>{cardBrand === 'mastercard' ? <MastercardSvg /> : <VisaSvg />}</div>
      <div className={cn(styles.creditCardNumber)}>
        {cardNumberList?.map((number, index) => (
          <span key={index}>{index > 1 ? STAR.repeat(number.length) : number}</span>
        ))}
      </div>
      <div className={cn(styles.creditCardExpirationDate)}>
        {expirationDate?.map((number, index) => (
          <span key={index}>{number}</span>
        ))}
      </div>
    </div>
  );
};
