import CardCVCInput from './cardInput/CardCVCInput';
import CardExpiryDateInput from './cardInput/CardExpiryDateInput';
import CardNumberInput from './cardInput/CardNumberInput';
import styles from './cardInputForm.module.css';
import { ExpiryDateType } from '../PaymentInputPage';
import CardIssuerSelector from './cardInput/CardIssuerSelector';
import CardSubmitButton from './CardSubmitButton';
import { ROUTER } from '../../../global/constants';
import { useNavigate } from 'react-router-dom';
import useValidateForm from '../../../hooks/useValidateForm';
import CardPasswordInput from './cardInput/CardPasswordInput';
import { useState } from 'react';

interface CardInputFormProps {
  expiryDate: ExpiryDateType;
  cardCVC: string;
  setExpiryDate: React.Dispatch<React.SetStateAction<ExpiryDateType>>;
  setCardCVC: React.Dispatch<React.SetStateAction<string>>;
}

function CardInputForm({
  expiryDate,
  cardCVC,
  setExpiryDate,
  setCardCVC,
}: CardInputFormProps) {
  const {
    isCardNumberValid,
    setIsCardNumberValid,
    isExpiryDateValid,
    setIsExpiryDateValid,
    isCVCValid,
    setIsCVCValid,
    isPasswordValid,
    setIsPasswordValid,
    isDataValid,
    ref,
  } = useValidateForm();
  const [isFormValid, setIsFormValid] = useState(false);

  const navigate = useNavigate();
  function submitCardInfo(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    navigate(ROUTER.registerComplete);
  }

  function changeValidation() {
    const target = ref.current;

    if (target) {
      setIsFormValid(target.checkValidity());
    }
  }

  return (
    <form
      className={styles.cardInputForm}
      onSubmit={submitCardInfo}
      onInput={changeValidation}
      ref={ref}
    >
      <CardIssuerSelector />
      <CardNumberInput
        isValid={isCardNumberValid}
        setIsValid={setIsCardNumberValid}
      />
      <CardExpiryDateInput
        expiryDate={expiryDate}
        setExpiryDate={setExpiryDate}
        isValid={isExpiryDateValid}
        setIsValid={setIsExpiryDateValid}
      />
      <CardCVCInput
        cardCVC={cardCVC}
        setCardCVC={setCardCVC}
        isValid={isCVCValid}
        setIsValid={setIsCVCValid}
      />
      <CardPasswordInput
        isValid={isPasswordValid}
        setIsValid={setIsPasswordValid}
      />
      {isDataValid && isFormValid && <CardSubmitButton />}
    </form>
  );
}
export default CardInputForm;
