import { ComponentPropsWithoutRef } from 'react';
import { Card } from '../../types';
import styles from './style.module.css';

interface CardItemProps extends ComponentPropsWithoutRef<'div'> {
  information: Card;
}

function CardItem({ information, className }: CardItemProps) {
  return (
    <div className={`${styles.cardItemContainer} ${className}`}>
      <div className={styles.cardChip}></div>
      <div className={styles.cardNumber}>
        {/* {information.cardNumber.map((number, index) => (
          <span key={index}>{index < 2 ? number : '•'.repeat(number.length)}</span>
        ))} */}
      </div>
      <div className={styles.cardMetaInfo}>
        <span className={styles.cardOwnerName}>{information.ownerName || 'NAME'}</span>
        <span className={styles.cardExpirationDate}>
          {information.expirationDate.month || 'MM'} / {information.expirationDate.year || 'YY'}
        </span>
      </div>
    </div>
  );
}

export default CardItem;
