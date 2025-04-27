import { Dispatch, SetStateAction, useEffect, useState } from "react";
import CardCVCInput from "./cardInput/CardCVCInput";
import CardExpirationDateInput from "./cardInput/CardExpirationDateInput";
import CardNumberInput from "./cardInput/CardNumberInput";
import styles from "./cardInputForm.module.css";
import CardBrandSelect from "./cardInput/CardBrandSelect";
import CardPasswordInput from "./cardInput/CardPasswordInput";
import SubmitButton from "../../../../../components/common/inputForm/button/SubmitButton";
import { CARD_BACKGROUND_COLOR } from "../cardPreview/constants/DisplayData";
import { CardInfo } from "../../PaymentInputPage";
interface CardInputFormProps {
  cardInfo: CardInfo;
  setCardInfo: Dispatch<SetStateAction<CardInfo>>;
}

function CardInputForm({ cardInfo, setCardInfo }: CardInputFormProps) {
  const { brandName } = cardInfo;
  const [validState, setValidState] = useState<Record<string, boolean>>({
    cardNumberInput: false,
    cardBrandSelect: false,
    cardExpirationDateInput: false,
    cardCVCInput: false,
    cardPasswordInput: false,
  });
  const [isVisibleSubmitButton, setIsVisibleSubmitButton] = useState(false);
  console.log("condition 모두 체크 -> ", validState);

  useEffect(() => {
    const isAllValid = Object.values(validState).every(
      (condition) => condition
    );
    setIsVisibleSubmitButton(isAllValid);
    console.log("isVisibleSubmitButton", isVisibleSubmitButton);
  }, [validState]);

  return (
    <form className={styles.cardInputForm}>
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
      {isVisibleSubmitButton && (
        <SubmitButton backgroundColor={CARD_BACKGROUND_COLOR[brandName]}>
          확인
        </SubmitButton>
      )}
    </form>
  );
}

export default CardInputForm;
