import styles from "./CardFormPage.module.css";
import useCardNumbersInput from "../../hooks/useCardNumbersInput";
import useCvcNumberInput from "../../hooks/useCvcNumberInput";
import useExpirationDateInput from "../../hooks/useExpirationDateInput";
import CardPassword from "./CardPassword/CardPassword";
import CardCvcNumber from "./CardCvcNumber/CardCvcNumber";
import CardExpirationDate from "./CardExpirationDate/CardExpirationDate";
import CardNumber from "./CardNumber/CardNumber";
import CardBrand from "./CardBrand/CardBrand";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import PreviewCardLayout from "../../components/PreviewCard/PreviewCardLayout";
import useCardBrandSelect from "../../hooks/useCardBrandSelect";
import useCardPasswordInput from "../../hooks/useCardPasswordInput";
import useStep from "../../hooks/useStep";
import { CARD_STEP } from "../../constants/CardStep";

export default function CardFormPage() {
  const { cardNumbers, cardNumbersError, onCardNumberChange } =
    useCardNumbersInput();
  const {
    cardExpirationDate,
    cardExpirationDateError,
    onExpirationDateChange,
  } = useExpirationDateInput();
  const { cvcNumbers, cvcNumbersError, onCvcNumberChange } =
    useCvcNumberInput();
  const { cardBrand, cardBrandError, onCardBrandChange } = useCardBrandSelect();
  const { password, passwordError, onPasswordChange } = useCardPasswordInput();
  const { step, nextStep } = useStep();

  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/result", {
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
          <CardPassword
            handleChange={onPasswordChange}
            step={step}
            handleStep={nextStep}
            password={password}
            errorMessage={passwordError}
          />
        )}
        {step >= CARD_STEP.CVC && (
          <CardCvcNumber
            handleChange={onCvcNumberChange}
            step={step}
            handleStep={nextStep}
            cvcNumbers={cvcNumbers}
            errorMessage={cvcNumbersError}
          />
        )}
        {step >= CARD_STEP.EXPIRATION && (
          <CardExpirationDate
            handleChange={onExpirationDateChange}
            step={step}
            handleStep={nextStep}
            cardExpirationDate={cardExpirationDate}
            errorMessage={cardExpirationDateError}
          />
        )}
        {step >= CARD_STEP.NUMBER && (
          <CardNumber
            handleChange={onCardNumberChange}
            step={step}
            handleStep={nextStep}
            cardNumbers={cardNumbers}
            errorMessage={cardNumbersError}
          />
        )}
        <CardBrand
          handleChange={onCardBrandChange}
          step={step}
          handleStep={nextStep}
          errorMessage={cardBrandError}
        />
      </form>
      {step >= CARD_STEP.CONFIRM && !hasError && (
        <Button text="확인" onClick={handleSubmit} />
      )}
    </div>
  );
}
