import styles from "./CardFormPage.module.css";
import useCardNumbersInput from "../../hooks/useCardNumbersInput";
import useCvcNumberInput from "../../hooks/useCvcNumberInput";
import useExpirationDateInput from "../../hooks/useExpirationDateInput";
import CardPassword from "./CardPassword/CardPassword";
import CardCvcNumber from "./CardCvcNumber/CardCvcNumber";
import CardExpirationDate from "./CardExpirationDate/CardExpirationDate";
import CardNumber from "./CardNumber/CarNumber";
import CardBrand from "./CardBrand/CardBrand";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import PreviewCardLayout from "../../components/PreviewCard/PreviewCardLayout";

export default function CardFormPage() {
  const { cardNumbers, cardType, cardNumbersError, onCardNumberChange } =
    useCardNumbersInput();
  const {
    cardExpirationDate,
    cardExpirationDateError,
    onExpirationDateChange,
  } = useExpirationDateInput();
  const { cvcNumbers, cvcNumbersError, onCvcNumberChange } =
    useCvcNumberInput();

  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/result", {
      state: {
        firstCardNumber: cardNumbers.FIRST,
        cardBrand: cardType,
      },
    });
  };

  return (
    <div className={styles["card-form-page"]}>
      <PreviewCardLayout
        cardNumbers={cardNumbers}
        cardType={cardType}
        cardExpirationDate={cardExpirationDate}
      />
      <div className={styles["card-form"]}>
        <CardPassword handleChange={() => {}} />
        <CardCvcNumber
          handleChange={onCvcNumberChange}
          cvcNumbers={cvcNumbers}
          errorMessage={cvcNumbersError}
        />
        <CardExpirationDate
          handleChange={onExpirationDateChange}
          cardExpirationDate={cardExpirationDate}
          errorMessage={cardExpirationDateError}
        />
        <CardNumber
          handleChange={onCardNumberChange}
          cardNumbers={cardNumbers}
          errorMessage={cardNumbersError}
        />
        <CardBrand handleChange={() => {}} />
      </div>
      <Button text="확인" onClick={handleSubmit} />
    </div>
  );
}
