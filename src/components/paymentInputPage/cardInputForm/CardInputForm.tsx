import CardCVCInput from './cardInput/CardCVCInput';
import CardExpirationDateInput from './cardInput/CardExpirationDateInput';
import CardNumberInput from './cardInput/CardNumberInput';
import styles from './cardInputForm.module.css';
import { ExpirationDateType } from '../PaymentInputPage';
import CardIssuerSelector from './cardInput/CardIssuerSelector';

interface CardInputFormProps {
  cardIssuer: string;
  cardNumbers: string[];
  expirationDate: ExpirationDateType;
  setCardIssuer: React.Dispatch<React.SetStateAction<string>>;
  setCardNumbers: React.Dispatch<React.SetStateAction<string[]>>;
  setExpirationDate: React.Dispatch<React.SetStateAction<ExpirationDateType>>;
}

function CardInputForm({
  cardIssuer,
  cardNumbers,
  expirationDate,
  setCardIssuer,
  setCardNumbers,
  setExpirationDate,
}: CardInputFormProps) {
  return (
    <div className={styles.cardInputForm}>
      <CardIssuerSelector
        cardIssuer={cardIssuer}
        setCardIssuer={setCardIssuer}
      />
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
