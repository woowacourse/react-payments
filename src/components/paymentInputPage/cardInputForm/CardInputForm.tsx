import { Dispatch, SetStateAction } from "react";
import CardCVCInput from "./cardInput/CardCVCInput";
import CardExpirationDateInput from "./cardInput/CardExpirationDateInput";
import CardNumberInput from "./cardInput/CardNumberInput";
import styles from "./cardInputForm.module.css";
import CardBrandSelect from "./cardInput/CardBrandSelect";

interface CardInputFormProps {
  setCardInfo: Dispatch<SetStateAction<string[]>>;
}

function CardInputForm({ setCardInfo }: CardInputFormProps) {
  return (
    <div className={styles.cardInputForm}>
      <CardNumberInput setCardInfo={setCardInfo} />
      <CardExpirationDateInput setCardInfo={setCardInfo} />
      <CardCVCInput />
      <CardBrandSelect setCardInfo={setCardInfo} />
    </div>
  );
}
export default CardInputForm;
