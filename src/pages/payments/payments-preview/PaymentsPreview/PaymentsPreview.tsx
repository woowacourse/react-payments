import useCreditCardLogo from '@hooks/payments/useCreditCardLogo';
import { Ellipse } from '@assets/images';
import styles from './PaymentsPreview.module.css';

interface PaymentsPreviewProps {
  cardNumbers: string[];
  expirationDate: { year: string; month: string };
  ownerName: string;
}

const PaymentsPreview: React.FC<PaymentsPreviewProps> = ({ cardNumbers, expirationDate, ownerName }) => {
  const { month, year } = expirationDate;
  const cardLogo = useCreditCardLogo(cardNumbers);
  const formattedMonth = month ? month.padStart(2, '0') : '';

  const renderPasswordDots = (length: number, keyPrefix: string) =>
    Array.from({ length }, (_, i) => (
      <img key={`${keyPrefix}-password-${i}`} width="4" height="4" src={Ellipse} alt="Password Dot" />
    ));

  return (
    <div className={styles.creditCardContainer}>
      <div className={styles.cardContainer}>
        <div className={`${styles.card} ${styles.icChip}`} />
        {cardLogo && (
          <div className={styles.card}>
            <img className={styles.creditCard} src={cardLogo} alt="Credit Card" />
          </div>
        )}
      </div>
      <div className={styles.cardDetailContainer}>
        <div className={`${styles.cardDetailText} ${styles.cardNumberContainer}`}>
          {cardNumbers.slice(0, 2).map((numbers, index) => (
            <span key={`cardNumber-${index}`} className={styles.cardNumberTextBox}>
              {numbers}
            </span>
          ))}
          {cardNumbers.slice(2).map((numbers, index) => (
            <span key={`password-${index}`} className={`${styles.cardNumberTextBox} ${styles.password}`}>
              {renderPasswordDots(numbers.length, `password-${index}`)}
            </span>
          ))}
        </div>
        <div className={styles.cardDetailText}>
          <span className={styles.expirationDateTextBox}>{formattedMonth}</span>
          {month || year ? '/' : ''}
          <span className={styles.expirationDateTextBox}>{year}</span>
        </div>
        <div className={styles.cardDetailText}>
          <span>{ownerName}</span>
        </div>
      </div>
    </div>
  );
};

export default PaymentsPreview;
