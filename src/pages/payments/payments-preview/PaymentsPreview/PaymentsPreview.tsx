import { Ellipse } from '@assets/images';
import { ID } from '@constants/index';
import useCreditCardLogo from '@hooks/payments/useCreditCardLogo';

import styles from './PaymentsPreview.module.css';
import useFocusId from '@hooks/payments/useFocusId';

interface PaymentsPreviewProps {
  cardIssuer: string;
  cardNumbers: string[];
  cvcNumber: string;
  expirationDate: { year: string; month: string };
  ownerName: string;
}

const PaymentsPreview: React.FC<PaymentsPreviewProps> = ({
  cardIssuer,
  cardNumbers,
  cvcNumber,
  expirationDate,
  ownerName,
}) => {
  const focusedId = useFocusId();
  const cardLogo = useCreditCardLogo(cardNumbers);

  const { month, year } = expirationDate;
  const formattedMonth = month ? month.padStart(2, '0') : '';
  const isFrontVisible = focusedId !== ID.payments.cvcNumberInput ? true : false;

  const renderPasswordDots = (length: number, keyPrefix: string) =>
    Array.from({ length }, (_, i) => (
      <img key={`${keyPrefix}-password-${i}`} width="4" height="4" src={Ellipse} alt="Password Dot" />
    ));

  return (
    <div className={`${styles.paymentsPreview}`}>
      {/* 카드 앞면 */}
      {isFrontVisible && (
        <div className={`${styles.frontPreview} ${styles['bg-issuer' + cardIssuer]}`}>
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
      )}
      {/* 카드 뒷면 */}
      {!isFrontVisible && (
        <div className={styles.backPreview}>
          <div className={styles.magneticStripe}>
            <p className={styles.cvcNumber}>{cvcNumber}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentsPreview;
