import CardCVCInput from './cardInput/CardCVCInput';
import CardExpirationDateInput from './cardInput/CardExpirationDateInput';
import CardNumberInput from './cardInput/CardNumberInput';
import styles from './cardInputForm.module.css';
import { ExpirationDateType } from '../PaymentInputPage';
import CardIssuerSelector from './cardInput/CardIssuerSelector';
import CardSubmitButton from './CardSubmitButton';
import { ROUTER } from '../../../global/constants';
import { useNavigate } from 'react-router-dom';
import useValidateForm from '../../../hooks/useValidateForm';

interface CardInputFormProps {
  expirationDate: ExpirationDateType;
  cardCVC: string;
  setExpirationDate: React.Dispatch<React.SetStateAction<ExpirationDateType>>;
  setCardCVC: React.Dispatch<React.SetStateAction<string>>;
}

function CardInputForm({
  expirationDate,
  cardCVC,
  setExpirationDate,
  setCardCVC,
}: CardInputFormProps) {
  const {
    isCardNumberValid,
    setIsCardNumberValid,
    isExpiryDateValid,
    setIsExpiryDateValid,
    isCVCValid,
    setIsCVCValid,
    isFormValid,
    ref,
  } = useValidateForm();

  const navigate = useNavigate();
  function submitCardInfo(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (isFormValid()) {
      navigate(ROUTER.registerComplete);
    }
  }

  return (
    <form className={styles.cardInputForm} onSubmit={submitCardInfo} ref={ref}>
      <CardIssuerSelector />
      <CardNumberInput
        isValid={isCardNumberValid}
        setIsValid={setIsCardNumberValid}
      />
      <CardExpirationDateInput
        expirationDate={expirationDate}
        setExpirationDate={setExpirationDate}
        isValid={isExpiryDateValid}
        setIsValid={setIsExpiryDateValid}
      />
      <CardCVCInput
        cardCVC={cardCVC}
        setCardCVC={setCardCVC}
        isValid={isCVCValid}
        setIsValid={setIsCVCValid}
      />
      {isFormValid() && <CardSubmitButton />}
    </form>
  );
}
export default CardInputForm;
