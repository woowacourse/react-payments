import CardCVCInput from "./cardCVCInput/CardCVCInput";
import CardExpirationDateInput from "./cardExpirationDateInput/CardExpirationDateInput";
import CardNumberInput from "./cardNumberInput/CardNumberInput";
import styles from "./cardInputForm.module.css";
import CardBrandSelect from "./cardBrandSelect/CardBrandSelect";
import CardPasswordInput from "./cardPasswordInput/CardPasswordInput";
import {
  CARD_BACKGROUND_COLOR,
  TCardBrand,
} from "../cardPreview/constants/DisplayData";
import { CardInfo } from "../../PaymentInputPage";
import { useNavigate } from "react-router";
import Button from "../../../../../components/common/button/Button";
import { useFormState } from "./hooks/useFormState";
interface CardInputFormProps {
  cardInfo: CardInfo;
  handleCardNumbersChange: (cardNumbers: string[]) => void;
  handleExpirationDateChange: (expirationDate: string[]) => void;
  handleBrandNameChange: (brandName: TCardBrand | "") => void;
}

function CardInputForm({
  cardInfo,
  handleCardNumbersChange,
  handleExpirationDateChange,
  handleBrandNameChange,
}: CardInputFormProps) {
  const { cardNumbers, brandName } = cardInfo;
  const {
    activatedInputs,
    isVisibleSubmitButton,
    handleActivateCardBrandSelect,
    handleActivateExpirationDateInput,
    handleActivateCVCInput,
    handleActivatePasswordInput,
    handleSetValidCardNumberInput,
    handleSetValidCardBrandSelect,
    handleSetValidExpirationDateInput,
    handleSetValidCVCInput,
    handleSetValidPasswordInput,
  } = useFormState();
  const navigate = useNavigate();

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/add-card/success", {
      state: {
        firstCardNumber: cardNumbers[0],
        brandName: brandName,
      },
    });
  };

  return (
    <form className={styles.cardInputForm} onSubmit={onSubmitHandler}>
      <div className={styles.inputBoxWrapper}>
        <div className={styles.inputBox}>
          {activatedInputs.cardPasswordInput && (
            <CardPasswordInput
              onSuccessValidate={handleSetValidPasswordInput}
            />
          )}

          {activatedInputs.cardCVCInput && (
            <CardCVCInput
              onSuccessValidate={handleSetValidCVCInput}
              onSuccessNextInput={handleActivatePasswordInput}
            />
          )}

          {activatedInputs.cardExpirationDateInput && (
            <CardExpirationDateInput
              handleExpirationDateChange={handleExpirationDateChange}
              onSuccessValidate={handleSetValidExpirationDateInput}
              onSuccessNextInput={handleActivateCVCInput}
            />
          )}

          {activatedInputs.cardBrandSelect && (
            <CardBrandSelect
              handleBrandNameChange={handleBrandNameChange}
              onSuccessValidate={handleSetValidCardBrandSelect}
              onSuccessNextInput={handleActivateExpirationDateInput}
            />
          )}

          <CardNumberInput
            handleCardNumbersChange={handleCardNumbersChange}
            onSuccessValidate={handleSetValidCardNumberInput}
            onSuccessNextInput={handleActivateCardBrandSelect}
          />
        </div>
        <div className={styles.fadeBottom}></div>
      </div>

      {isVisibleSubmitButton && (
        <Button
          type="submit"
          backgroundColor={CARD_BACKGROUND_COLOR[brandName]}
        >
          확인
        </Button>
      )}
    </form>
  );
}

export default CardInputForm;
