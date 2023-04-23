import styles from './style.module.css';
import { ComponentPropsWithoutRef } from 'react';
import { CardInformation } from '../../types';
import { CARD_NUMBER_UNIT_MAX_LENGTH, REGEX, SECURITY_TEXT_ICON } from '../../constants';
import { CARD_BG_COLOR } from '../../constants/cardColors';

interface CardItemProps extends ComponentPropsWithoutRef<'div'> {
  information: CardInformation;
}

function CardItem({ information, className }: CardItemProps) {
  const cardNumber: string[] = information.cardNumber.match(REGEX.FOUR_CHAR_SEQUENCE) ?? [];
  const displayedCardNumber = cardNumber.concat(
    Array(CARD_NUMBER_UNIT_MAX_LENGTH - cardNumber.length).fill('')
  );
  const style = {
    backgroundColor: information.issuer && CARD_BG_COLOR[information.issuer],
    color: information.issuer === '카카오뱅크' ? '#0e0e0e' : 'white',
  };

  return (
    <div className={`${styles.cardItemContainer} ${className}`} style={style}>
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

export default CardItem;
