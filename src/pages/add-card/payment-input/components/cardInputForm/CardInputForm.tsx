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
    handleActivateInput,
    handleValidInput,
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
          {activatedInputs.cardCVCInput && (
            <CardPasswordInput
              onSuccessValidate={(isValid) =>
                handleValidInput("cardPasswordInput", isValid)
              }
            />
          )}

          {activatedInputs.cardExpirationDateInput && (
            <CardCVCInput
              onSuccessValidate={(isValid) =>
                handleValidInput("cardCVCInput", isValid)
              }
              onSuccessNextInput={() => handleActivateInput("cardCVCInput")}
            />
          )}

          {activatedInputs.cardBrandSelect && (
            <CardExpirationDateInput
              handleExpirationDateChange={handleExpirationDateChange}
              onSuccessValidate={(isValid) =>
                handleValidInput("cardExpirationDateInput", isValid)
              }
              onSuccessNextInput={() =>
                handleActivateInput("cardExpirationDateInput")
              }
            />
          )}

          {activatedInputs.cardNumberInput && (
            <CardBrandSelect
              handleBrandNameChange={handleBrandNameChange}
              onSuccessValidate={(isValid) =>
                handleValidInput("cardBrandSelect", isValid)
              }
              onSuccessNextInput={() => handleActivateInput("cardBrandSelect")}
            />
          )}

          <CardNumberInput
            handleCardNumbersChange={handleCardNumbersChange}
            onSuccessValidate={(isValid) =>
              handleValidInput("cardNumberInput", isValid)
            }
            onSuccessNextInput={() => handleActivateInput("cardNumberInput")}
          />
        </div>
        <div className={styles.fadeBottom}></div>
      </div>

      {isVisibleSubmitButton && (
        <Button
          type="submit"
          backgroundColor={
            brandName !== ""
              ? CARD_BACKGROUND_COLOR[brandName]
              : "var(--light-black)"
          }
        >
          확인
        </Button>
      )}
    </form>
  );
}

export default CardInputForm;
