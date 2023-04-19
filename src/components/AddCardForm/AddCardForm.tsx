import styles from './AddCardForm.module.css';
import NextButton from '../NextButton/NextButton';
import CardNumberInput from '../CardNumberInput/CardNumberInput';
import ExpirationDateInput from '../ExpirationDateInput/ExpirationDateInput';
import CardOwnerName from '../CardOwnerName/CardOwnerName';
import CardSecurityCodeInput from '../CardSecurityCodeInput/CardSecurityCodeInput';
import CardPasswordInput from '../CardPasswordInput/CardPasswordInput';

type AddCardFormProps = {
  updateCardNumber: (cardNumber: string) => void;
  updateExpirationDate: (expirationDate: string) => void;
  updateCardOwnerName: (cardOwnerName: string) => void;
};

const AddCardForm = ({ updateCardNumber, updateExpirationDate, updateCardOwnerName }: AddCardFormProps) => {
  return (
    <form className={styles.container}>
      <CardNumberInput updateCardNumber={updateCardNumber} />
      <ExpirationDateInput updateExpirationDate={updateExpirationDate} />
      <CardOwnerName updateCardOwnerName={updateCardOwnerName} />
      <CardSecurityCodeInput />
      <CardPasswordInput />
      <div className={styles.button}>
        <NextButton />
      </div>
    </form>
  );
};

export default AddCardForm;
