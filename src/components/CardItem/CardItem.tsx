import styles from './style.module.css';
import { ComponentPropsWithoutRef, memo } from 'react';
import { CardDisplayInformation } from '../../types';
import { CARD_NUMBER_UNIT_MAX_LENGTH, REGEX, SECURITY_TEXT_ICON } from '../../constants';
import { ISSUER_CLASS_NAME } from '../../constants/issuerClassName';

interface CardItemProps extends ComponentPropsWithoutRef<'div'>, CardDisplayInformation {}

function CardItem({
  issuer,
  cardNumber,
  expirationDate,
  ownerName,
  className = '',
}: CardItemProps) {
  const cardNumberArray: string[] = cardNumber.match(REGEX.FOUR_CHAR_SEQUENCE) ?? [];
  const displayedCardNumber = cardNumberArray.concat(
    Array(CARD_NUMBER_UNIT_MAX_LENGTH - cardNumberArray.length).fill('')
  );

  return (
    <div
      className={`${styles.cardItemContainer} ${
        issuer && styles[ISSUER_CLASS_NAME[issuer]]
      } ${className}`}
    >
      <p className={styles.cardIssuer}>{issuer}</p>
      <div className={styles.cardChip}></div>
      <div className={styles.cardNumber}>
        {displayedCardNumber.map((number, index, cardNumber) => (
          <span key={index}>
            {index < cardNumber.length / 2 ? number : SECURITY_TEXT_ICON.repeat(number.length)}
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
}

export default memo(CardItem);
