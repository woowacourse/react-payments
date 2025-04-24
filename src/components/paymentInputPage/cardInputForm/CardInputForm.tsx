import { Dispatch, SetStateAction } from "react";
import CardCVCInput from "./cardInput/CardCVCInput";
import CardExpirationDateInput from "./cardInput/CardExpirationDateInput";
import CardNumberInput from "./cardInput/CardNumberInput";
import styles from "./cardInputForm.module.css";
import CardBrandSelect from "./cardInput/CardBrandSelect";

interface CardInputFormProps {
  setCardNumbers: Dispatch<SetStateAction<string[]>>;
  setExpirationDate: Dispatch<SetStateAction<string[]>>;
}

function CardInputForm({
  setCardNumbers,
  setExpirationDate,
}: CardInputFormProps) {
  return (
    <div className={styles.cardInputForm}>
      <CardNumberInput setCardNumbers={setCardNumbers} />
      <CardExpirationDateInput setExpirationDate={setExpirationDate} />
      <CardCVCInput />
      <CardBrandSelect />
    </div>
  );
}
export default CardInputForm;
