import styles from './style.module.css';
import { ComponentPropsWithoutRef, memo } from 'react';
import { CardDisplayInformation } from '../../types';
import { CARD_NUMBER_UNIT_MAX_LENGTH, REGEX, SECURITY_TEXT_ICON } from '../../constants';
import { ISSUER_CLASS_NAME } from '../../constants/issuerClassName';

interface CardItemProps extends ComponentPropsWithoutRef<'div'> {
  information: CardDisplayInformation;
}

function CardItem({ information, className = '' }: CardItemProps) {
  const cardNumber: string[] = information.cardNumber.match(REGEX.FOUR_CHAR_SEQUENCE) ?? [];
  const displayedCardNumber = cardNumber.concat(
    Array(CARD_NUMBER_UNIT_MAX_LENGTH - cardNumber.length).fill('')
  );

  return (
    <div
      className={`${styles.cardItemContainer} ${
        information.issuer && styles[ISSUER_CLASS_NAME[information.issuer]]
      } ${className}`}
    >
      <p className={styles.cardIssuer}>{information.issuer}</p>
      <div className={styles.cardChip}></div>
      <div className={styles.cardNumber}>
        {displayedCardNumber.map((number, index, cardNumber) => (
          <span key={index}>
            {index < cardNumber.length / 2 ? number : SECURITY_TEXT_ICON.repeat(number.length)}
          </span>
        ))}
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

export default memo(CardItem);
