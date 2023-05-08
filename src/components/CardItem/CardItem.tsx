import { memo } from 'react';
import type { ComponentPropsWithoutRef } from 'react';
import type { CardDisplayInformation } from '../../types';
import { ISSUER_CLASS_NAME } from '../../constants/issuerClassName';
import { SECURITY_TEXT_ICON } from '../../constants';
import { CARD_NUMBER_UNIT_MAX_LENGTH } from '../../constants/input';
import styles from './style.module.css';

interface CardItemProps extends ComponentPropsWithoutRef<'div'>, CardDisplayInformation {}

const CardItem = ({
  issuer,
  cardNumber,
  expirationDate,
  ownerName,
  className = '',
}: CardItemProps) => {
  return (
    <div
      className={`${styles.cardItemContainer} ${
        issuer && styles[ISSUER_CLASS_NAME[issuer]]
      } ${className}`}
    >
      <p className={styles.cardIssuer}>{issuer}</p>
      <div className={styles.cardChip} />
      <div className={styles.cardNumber}>
        {cardNumber.map((number, index) => (
          <span key={index}>
            {index < CARD_NUMBER_UNIT_MAX_LENGTH / 2
              ? number
              : SECURITY_TEXT_ICON.repeat(number.length)}
          </span>
        ))}
      </div>
      <div className={styles.cardMetaInfo}>
        <span className={styles.cardOwnerName}>{ownerName || 'NAME'}</span>
        <span className={styles.cardExpirationDate}>
          {expirationDate.month || 'MM'} / {expirationDate.year || 'YY'}
        </span>
      </div>
    </div>
  );
};

export default memo(CardItem);
