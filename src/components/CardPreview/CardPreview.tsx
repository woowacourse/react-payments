import styles from './CardPreview.module.css';
import {
  CARD_BRAND,
  MASK_START_INDEX,
  SYMBOLS,
} from '../../constants/cardInfo';

interface CardPreviewProps {
  cardNumbers: string[];
  expirationDate: string[];
  ownerName: string;
}

type Brand = 'visa' | 'master' | null;

const getCardbrand = (cardNumbers: CardPreviewProps['cardNumbers']): Brand => {
  const { visa, master } = CARD_BRAND;

  if (cardNumbers[0].startsWith(visa.startNumber.toString())) return 'visa';

  if (
    Number(cardNumbers[0].slice(0, 2)) >= master.startNumber &&
    Number(cardNumbers[0].slice(0, 2)) <= master.endNumber
  )
    return 'master';

  return null;
};

const CardPreview = ({
  cardNumbers,
  expirationDate,
  ownerName,
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
                className={`${styles.cardNumber} ${isMask && styles.mask}`}
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
