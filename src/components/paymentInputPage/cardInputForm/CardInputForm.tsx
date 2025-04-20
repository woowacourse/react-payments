import { Dispatch, SetStateAction } from 'react';
import CardCVCInput from './cardInput/CardCVCInput';
import CardExpirationDateInput from './cardInput/CardExpirationDateInput';
import CardNumberInput from './cardInput/CardNumberInput';
import styles from './cardInputForm.module.css';

interface CardInputFormProps {
  cardNumbers: string[];
  expirationDate: string[];
  setCardNumbers: Dispatch<SetStateAction<string[]>>;
  setExpirationDate: Dispatch<SetStateAction<string[]>>;
}

function CardInputForm({
  cardNumbers,
  expirationDate,
  setCardNumbers,
  setExpirationDate,
}: CardInputFormProps) {
  return (
    <div className={styles.cardInputForm}>
      <CardNumberInput
        cardNumbers={cardNumbers}
        setCardNumbers={setCardNumbers}
      />
      <CardExpirationDateInput
        expirationDate={expirationDate}
        setExpirationDate={setExpirationDate}
      />
      <CardCVCInput />
    </div>
  );
}
export default CardInputForm;
