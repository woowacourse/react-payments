import styles from "./CardFormPage.module.css";
import useCardNumbersInput from "../../hooks/useCardNumbersInput";
import useCvcNumberInput from "../../hooks/useCvcNumberInput";
import useExpirationDateInput from "../../hooks/useExpirationDateInput";
import CardPasswordInput from "./CardPasswordInput/CardPasswordInput";
import CardCvcNumberInput from "./CardCvcNumberInput/CardCvcNumberInput";
import CardExpirationDateInput from "./CardExpirationDateInput/CardExpirationDateInput";
import CardNumberInput from "./CardNumberInput/CardNumberInput";
import CardBrandSelect from "./CardBrandSelect/CardBrandSelect";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import PreviewCardLayout from "../../components/PreviewCard/PreviewCardLayout";
import useCardBrandSelect from "../../hooks/useCardBrandSelect";
import useCardPasswordInput from "../../hooks/useCardPasswordInput";
import useStep from "../../hooks/useStep";
import { CARD_STEP } from "../../constants/CardStep";
import { PAYMENTS_ROUTE } from "../../constants/PaymentsRoute";

export default function CardFormPage() {
  const { step, nextStep } = useStep();
  let { cardNumbers, cardNumbersError, onCardNumberChange } =
    useCardNumbersInput(nextStep);
  const {
    cardExpirationDate,
    cardExpirationDateError,
    onExpirationDateChange,
  } = useExpirationDateInput(nextStep);
  const { cvcNumbers, cvcNumbersError, onCvcNumberChange } =
    useCvcNumberInput(nextStep);
  const { cardBrand, cardBrandError, onCardBrandChange } =
    useCardBrandSelect(nextStep);
  const { password, passwordError, onPasswordChange } =
    useCardPasswordInput(nextStep);

  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate(PAYMENTS_ROUTE.RESULT, {
      state: {
        firstCardNumber: cardNumbers.FIRST,
        cardBrand: cardBrand,
      },
    });
  };

  const allErrorMessages = [
    ...Object.values(cardNumbersError),
    ...Object.values(cardExpirationDateError),
    cvcNumbersError,
    cardBrandError,
    passwordError,
  ];

  const hasError = allErrorMessages.some((msg) => msg !== "");

  return (
    <div className={styles["card-form-page"]}>
      <PreviewCardLayout
        cardBrand={cardBrand}
        cardNumbers={cardNumbers}
        cardExpirationDate={cardExpirationDate}
      />
      <form className={styles["card-form"]}>
        {step >= CARD_STEP.PASSWORD && (
          <CardPasswordInput
            handleChange={onPasswordChange}
            step={step}
            password={password}
            errorMessage={passwordError}
          />
        )}
        {step >= CARD_STEP.CVC && (
          <CardCvcNumberInput
            handleChange={onCvcNumberChange}
            step={step}
            cvcNumbers={cvcNumbers}
            errorMessage={cvcNumbersError}
          />
        )}
        {step >= CARD_STEP.EXPIRATION && (
          <CardExpirationDateInput
            handleChange={onExpirationDateChange}
            step={step}
            cardExpirationDate={cardExpirationDate}
            errorMessage={cardExpirationDateError}
          />
        )}
        {step >= CARD_STEP.NUMBER && (
          <CardNumberInput
            handleChange={onCardNumberChange}
            step={step}
            cardNumbers={cardNumbers}
            errorMessage={cardNumbersError}
          />
        )}
        <CardBrandSelect
          handleChange={onCardBrandChange}
          step={step}
          errorMessage={cardBrandError}
        />
      </form>
      {step >= CARD_STEP.CONFIRM && !hasError && (
        <Button text="확인" onClick={handleSubmit} />
      )}
    </div>
  );
}
