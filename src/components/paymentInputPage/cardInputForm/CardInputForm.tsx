import CardCVCInput from './cardInput/CardCVCInput';
import CardExpirationDateInput from './cardInput/CardExpirationDateInput';
import CardNumberInput from './cardInput/CardNumberInput';
import styles from './cardInputForm.module.css';

function CardInputForm() {
  return (
    <div className={styles.cardInputForm}>
      <CardNumberInput />
      <CardExpirationDateInput />
      <CardCVCInput />
    </div>
  );
}

export default CardInputForm;
