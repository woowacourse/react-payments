import styles from './AddCardForm.module.css';
import CardNumberInput from '../CardNumberInput/CardNumberInput';
import ExpirationDateInput from '../ExpirationDateInput/ExpirationDateInput';
import CardOwnerName from '../CardOwnerName/CardOwnerName';
import CardSecurityCodeInput from '../CardSecurityCodeInput/CardSecurityCodeInput';
import CardPasswordInput from '../CardPasswordInput/CardPasswordInput';
import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import { useCardStore } from '../../hook/useCardState';

const AddCardForm = () => {
  const navigate = useNavigate();
  const { get } = useCardStore();
  const cardNumber = get().cardNumber;
  const expirationDate = get().expirationDate;
  const securityCode = get().securityCode;
  const firstDigit = get().firstDigit;
  const secondDigit = get().secondDigit;

  const handleNextButtonClick = () => {
    if (!cardNumber || !expirationDate || !securityCode || !firstDigit || !secondDigit) {
      return;
    }
    navigate('/card-registration-confirmation');
  };
  return (
    <form className={styles.container} aria-label="카드 등록 양식">
      <CardNumberInput />
      <ExpirationDateInput />
      <CardOwnerName />
      <CardSecurityCodeInput />
      <CardPasswordInput />
      <div className={styles.buttonContainer} role="group" aria-label="다음 단계 버튼">
        <Button type="button" className={styles.button} onClick={handleNextButtonClick}>
          다음
        </Button>
      </div>
    </form>
  );
};

export default AddCardForm;
