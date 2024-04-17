import { useEffect, useState } from 'react';

import styles from './CardPreview.module.css';

import Master from '../../imgs/Mastercard.png';
import Visa from '../../imgs/Visa.png';

interface CardPreviewProps {
  cardNumbers: string[];
  expirationDate: string[];
  ownerName: string;
}

type Brand = 'visa' | 'master' | null;
const BRAND_LOGOS = {
  visa: Visa,
  master: Master,
};

const CardPreview = ({
  cardNumbers,
  expirationDate,
  ownerName,
}: CardPreviewProps) => {
  const [brand, setBrand] = useState<Brand>(null);

  useEffect(() => {
    if (cardNumbers[0].startsWith('4')) {
      setBrand('visa');
    } else if (
      Number(cardNumbers[0].slice(0, 2)) >= 51 &&
      Number(cardNumbers[0].slice(0, 2)) <= 55
    ) {
      setBrand('master');
    } else {
      setBrand(null);
    }
  }, [cardNumbers]);

  return (
    <div className={styles.container}>
      <div className={styles.cardHeader}>
        <div className={styles.chip} />
        {brand && (
          <img src={BRAND_LOGOS[brand]} className={styles.brandLogo}></img>
        )}
      </div>

      <div className={styles.cardBody}>
        <div className={styles.cardNumbers}>
          {cardNumbers.map((cardNumber, index) => {
            const isMask = index >= 2;
            return (
              <span className={`${styles.cardNumber} ${isMask && styles.mask}`}>
                {index >= 2 ? '●'.repeat(cardNumber.length) : cardNumber}
              </span>
            );
          })}
        </div>
        <div className={styles.expirationDate}>{expirationDate.join('/')}</div>
        <div className={styles.ownerName}>{ownerName}</div>
      </div>
    </div>
  );
};

export default CardPreview;
