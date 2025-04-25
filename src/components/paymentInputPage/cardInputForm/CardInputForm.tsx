import { Dispatch, SetStateAction, useState } from "react";
import CardCVCInput from "./cardInput/CardCVCInput";
import CardExpirationDateInput from "./cardInput/CardExpirationDateInput";
import CardNumberInput from "./cardInput/CardNumberInput";
import styles from "./cardInputForm.module.css";
import CardBrandSelect from "./cardInput/CardBrandSelect";
import CardPasswordInput from "./cardInput/CardPasswordInput";
import SubmitButton from "../../common/inputForm/button/SubmitButton";
import { CARD_BACKGROUND_COLOR } from "../cardPreview/constants/DisplayData";

interface CardInputFormProps {
  setCardInfo: Dispatch<SetStateAction<string[]>>;
}

function CardInputForm({ cardInfo, setCardInfo }: CardInputFormProps) {
  const { brandName } = cardInfo;
  const [validState, setValidState] = useState({
    cardNumberInput: false,
    cardBrandSelect: false,
    cardExpirationDateInput: false,
    cardCVCInput: false,
    cardPasswordInput: false,
  });
  console.log("cardPasswordInput -> ", validState.cardPasswordInput);
  console.log("cardBrandSelect -> ", validState.cardBrandSelect);
  return (
    <>
      <div className={styles.cardInputForm}>
        <div className={styles.inputBox}>
          {validState.cardCVCInput && (
            <CardPasswordInput setValidState={setValidState} />
          )}
          {validState.cardExpirationDateInput && (
            <CardCVCInput setValidState={setValidState} />
          )}
          {validState.cardBrandSelect && (
            <CardExpirationDateInput
              setValidState={setValidState}
              setCardInfo={setCardInfo}
            />
          )}
          {validState.cardNumberInput && (
            <CardBrandSelect
              setValidState={setValidState}
              setCardInfo={setCardInfo}
            />
          )}
          <CardNumberInput
            setValidState={setValidState}
            setCardInfo={setCardInfo}
          />
        </div>
        {Object.values(validState).every((valid) => valid === true) && (
          <SubmitButton
            content="확인"
            backgroundColor={CARD_BACKGROUND_COLOR[brandName]}
          />
        )}
      </div>
    </>
  );
}

export default CardInputForm;
