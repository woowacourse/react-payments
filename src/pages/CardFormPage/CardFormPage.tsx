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
import useCardPassword from "../../hooks/useCardPassword";
import useStep from "../../hooks/useStep";

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
  const { password, passwordError, onPasswordChange } = useCardPassword();
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

  return (
    <div className={styles["card-form-page"]}>
      <PreviewCardLayout
        cardBrand={cardBrand}
        cardNumbers={cardNumbers}
        cardExpirationDate={cardExpirationDate}
      />
      <div className={styles["card-form"]}>
        {step > 3 && (
          <CardPassword
            handleChange={onPasswordChange}
            password={password}
            errorMessage={passwordError}
          />
        )}
        {step > 2 && (
          <CardCvcNumber
            handleChange={onCvcNumberChange}
            step={step}
            handleStep={nextStep}
            cvcNumbers={cvcNumbers}
            errorMessage={cvcNumbersError}
          />
        )}
        {step > 1 && (
          <CardExpirationDate
            handleChange={onExpirationDateChange}
            step={step}
            handleStep={nextStep}
            cardExpirationDate={cardExpirationDate}
            errorMessage={cardExpirationDateError}
          />
        )}
        {step > 0 && (
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
      </div>
      <Button text="확인" onClick={handleSubmit} />
    </div>
  );
}
