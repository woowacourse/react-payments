import styles from './CardPreview.module.css';
import clsx from 'clsx';

import {
  CARD_BRAND,
  MASK_START_INDEX,
  SYMBOLS,
} from '../../constants/cardInfo';

type Brand = 'visa' | 'master';
type CardPreviewProps = Record<keyof CardInfo, string[]>;

const getCardbrand = (
  cardNumbers: CardPreviewProps['cardNumbers']
): Nullable<Brand> => {
  const { visa, master } = CARD_BRAND;

  const visaPrefix = Number(cardNumbers[0].slice(0, 1));
  const masterPrefix = Number(cardNumbers[0].slice(0, 2));

  if (visaPrefix === visa.startNumber) return 'visa';

  if (masterPrefix >= master.startNumber && masterPrefix <= master.endNumber)
    return 'master';

  return null;
};

const CardPreview = ({
  cardNumbers,
  expirationDate,
  ownerName,
  cardIssuer,
  cvc,
  password,
}: CardPreviewProps) => {
  const brand = getCardbrand(cardNumbers);

  return (
    <div className={styles.container}>
      <div className={styles.cardHeader}>
        <div className={styles.chip} />
        {brand && (
          <img src={CARD_BRAND[brand].logo} className={styles.brandLogo}></img>
        )}
      </div>

      <div className={styles.cardBody}>
        <div className={styles.cardNumbers}>
          {cardNumbers.map((cardNumber, index) => {
            const isMask = index >= MASK_START_INDEX;

            return (
              <span
                key={index}
                className={clsx(styles.cardNumber, { [styles.mask]: isMask })}
              >
                {index >= MASK_START_INDEX
                  ? SYMBOLS.mask.repeat(cardNumber.length)
                  : cardNumber}
              </span>
            );
          })}
        </div>

        <div className={styles.expirationDate}>
          {expirationDate.every((input) => input !== '') &&
            expirationDate.join(SYMBOLS.slash)}
        </div>

        <div className={styles.ownerName}>{ownerName}</div>
      </div>
    </div>
  );
};

export default CardPreview;
