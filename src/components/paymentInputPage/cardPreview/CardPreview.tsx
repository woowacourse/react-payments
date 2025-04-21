import { ExpirationDateType } from '../PaymentInputPage';
import styles from './CardPreview.module.css';

export type CardInformationType = {
  cardNumbers: string[];
  expirationDate: ExpirationDateType;
};

const BRAND_IMAGE = {
  visa: './Visa.png',
  master: './Mastercard.png',
};

function CardPreview({ cardNumbers, expirationDate }: CardInformationType) {
  const inputCardNumber = cardNumbers.join('');
  const brand = determineBrand(inputCardNumber);

  const displayCardNumbers = cardNumbers.map((number, index) => {
    if (index <= 1) {
      return number;
    }

    return '•'.repeat(number.length);
  });

  function determineBrand(inputCardNumber: string) {
    const visa = ['4'];
    const master = ['51', '52', '53', '54', '55'];

    if (checkBrandCard(inputCardNumber, visa)) return 'visa';
    if (checkBrandCard(inputCardNumber, master)) return 'master';
    return '';
  }

  function checkBrandCard(cardNumber: string, brandNumbers: string[]) {
    return brandNumbers.some((code) => cardNumber.startsWith(code));
  }

  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <div className={styles.goldBox}></div>

        {brand === '' ? null : (
          <img src={BRAND_IMAGE[brand]} className={styles.logoBrand} />
        )}
      </div>
      <div className={`${styles.cardNumberBox} tx-md`}>
        {displayCardNumbers.map((number, index) => {
          return (
            <p
              className={`${styles.cardNumber} ${
                index >= 2 ? styles.maskingCardNumber : ''
              }`}
            >
              {number}
            </p>
          );
        })}
      </div>
      <p className={`${styles.cardNumber} tx-md`}>
        {expirationDate.month !== '' || expirationDate.year !== ''
          ? `${expirationDate.month}/${expirationDate.year}`
          : ''}
      </p>
    </div>
  );
}

export default CardPreview;
