import { Dispatch, SetStateAction, useEffect, useState } from "react";
import CardCVCInput from "./cardInput/CardCVCInput";
import CardExpirationDateInput from "./cardInput/CardExpirationDateInput";
import CardNumberInput from "./cardInput/CardNumberInput";
import styles from "./cardInputForm.module.css";
import CardBrandSelect from "./cardInput/CardBrandSelect";
import CardPasswordInput from "./cardInput/CardPasswordInput";
import { CARD_BACKGROUND_COLOR } from "../cardPreview/constants/DisplayData";
import { CardInfo } from "../../PaymentInputPage";
import { useNavigate } from "react-router";
import Button from "../../../../../components/common/button/Button";
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

  const navigate = useNavigate();

  useEffect(() => {
    const isAllValid = Object.values(validState).every(
      (condition) => condition
    );
    setIsVisibleSubmitButton(isAllValid);
  }, [validState]);

  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/add-card/success", {
      state: {
        firstCardNumber: cardInfo.cardNumbers[0],
        brandName: cardInfo.brandName,
      },
    });
  };

  return (
    <form className={styles.cardInputForm}>
      <div className={styles.inputBoxWrapper}>
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
        <div className={styles.fadeBottom}></div>
      </div>

      {isVisibleSubmitButton && (
        <Button
          type="submit"
          onClickHandler={onSubmitHandler}
          backgroundColor={CARD_BACKGROUND_COLOR[brandName]}
        >
          확인
        </Button>
      )}
    </form>
  );
}

export default CardInputForm;
