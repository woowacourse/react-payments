import styles from './AddCardForm.module.css';
import CardNumberInput from '../CardNumberInput/CardNumberInput';
import ExpirationDateInput from '../ExpirationDateInput/ExpirationDateInput';
import CardOwnerName from '../CardOwnerName/CardOwnerName';
import CardSecurityCodeInput from '../CardSecurityCodeInput/CardSecurityCodeInput';
import CardPasswordInput from '../CardPasswordInput/CardPasswordInput';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';

const AddCardForm = () => {
  return (
    <form className={styles.container}>
      <CardNumberInput />
      <ExpirationDateInput />
      <CardOwnerName />
      <CardSecurityCodeInput />
      <CardPasswordInput />
      <div className={styles.buttonContainer}>
        <Link to="/card-registration-confirmation">
          <Button type="button" className={styles.button}>
            다음
          </Button>
        </Link>
      </div>
    </form>
  );
};

export default AddCardForm;
