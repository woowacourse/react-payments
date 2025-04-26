import CardCVCInput from './cardInput/CardCVCInput';
import CardExpirationDateInput from './cardInput/CardExpirationDateInput';
import CardNumberInput from './cardInput/CardNumberInput';
import styles from './cardInputForm.module.css';
import { ExpirationDateType } from '../PaymentInputPage';
import CardIssuerSelector from './cardInput/CardIssuerSelector';
import { useState } from 'react';
import CardSubmitButton from './CardSubmitButton';

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
  const [isCardNumberValid, setCardNumberIsValid] = useState<boolean[]>([
    true,
    true,
    true,
    true,
  ]);
  const [isExpirationDateValid, setIsExpirationDateValid] = useState({
    month: true,
    year: true,
  });
  const [isCVCValid, setIsCVCValid] = useState<boolean>(true);

  const isTotalNumbersValid = isCardNumberValid.every((valid) => valid);
  const isTotalExpirationDateValid =
    isExpirationDateValid.month && isExpirationDateValid.year;
  const isFormValid =
    isTotalNumbersValid && isTotalExpirationDateValid && isCVCValid;

  return (
    <div className={styles.cardInputForm}>
      <CardIssuerSelector />
      <CardNumberInput
        isValid={isCardNumberValid}
        setIsValid={setCardNumberIsValid}
      />
      <CardExpirationDateInput
        expirationDate={expirationDate}
        setExpirationDate={setExpirationDate}
        isValid={isExpirationDateValid}
        setIsValid={setIsExpirationDateValid}
      />
      <CardCVCInput
        cardCVC={cardCVC}
        setCardCVC={setCardCVC}
        isValid={isCVCValid}
        setIsValid={setIsCVCValid}
      />
      {isFormValid && <CardSubmitButton isFormValid={isFormValid} />}
    </div>
  );
}
export default CardInputForm;
