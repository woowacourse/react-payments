import clsx from 'clsx';
import styles from './CardPreview.module.css';

import {
  CARD_BRAND,
  CARD_ISSUER_SELECTOR,
  MASK_START_INDEX,
  SYMBOLS,
} from '../../constants/cardInfo';

import useFlipCard from '../../hooks/useFlipCard';
import { getCardBrand } from '../../domain/getCardBrand';

type CardPreviewProps = Record<keyof CardInfo, string[]>;
export default function CardPreview({
  cardNumbers,
  expirationDate,
  ownerName,
  cardIssuer,
  cvc,
  password,
}: CardPreviewProps) {
  const { isFrontSide, flipCard } = useFlipCard({
    frontDeps: [cardNumbers, expirationDate, ownerName, cardIssuer, password],
    backDeps: [cvc],
  });

  const cardIssuerClass = CARD_ISSUER_SELECTOR.get(cardIssuer[0]) as string;

  return (
    <div
      className={clsx(styles.container, styles[cardIssuerClass], {
        [styles.backSide]: !isFrontSide,
      })}
      onClick={flipCard}
    >
      {isFrontSide ? (
        <FrontSide
          cardNumbers={cardNumbers}
          expirationDate={expirationDate}
          ownerName={ownerName}
          cardIssuer={cardIssuer}
        />
      ) : (
        <BackSide cvc={cvc} />
      )}
    </div>
  );
}

type FrontSideProps = Pick<
  CardPreviewProps,
  'cardNumbers' | 'expirationDate' | 'ownerName' | 'cardIssuer'
>;
function FrontSide({ cardNumbers, expirationDate, ownerName }: FrontSideProps) {
  const brand = getCardBrand(cardNumbers.join(''));

  return (
    <>
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
    </>
  );
}

type BackSideProps = Pick<CardPreviewProps, 'cvc'>;
function BackSide({ cvc }: BackSideProps) {
  return (
    <>
      <div className={styles.cvc}>{cvc}</div>
    </>
  );
}
