import styles from '../cardDisplay.module.css';
type CardNumberDisplayProps = {
  cardNumber: string;
  isMasked: boolean;
};

const CardNumberDisplay = ({
  cardNumber,
  isMasked = false,
}: CardNumberDisplayProps) => {
  return (
    <p className={styles.cardNumberDisplay}>
      {isMasked
        ? (cardNumber = '*'.repeat(String(cardNumber).length))
        : cardNumber}
    </p>
  );
};

export default CardNumberDisplay;
