import InputSection from "../../components/InputSection/InputSection";
import { INPUT_TYPE } from "../../constants/constants";
import { useCompletion } from "../../hooks/useCompletion";
import { useInputError } from "../../hooks/useInputError";
import Preview from "../../components/Preview/Preview";
import { PaymentsCSS } from "./Payments.styled";
import { useVisibleSteps } from "../../hooks/useVisibleSteps";
import { useMemo } from "react";
import Button from "../../components/Button/Button";
import { useCard } from "../../hooks/useCard";
import { useNavigate } from "react-router-dom";
function Payments() {
  const {
    isComplete,
    updateCardNumberIsComplete,
    updateCardBrandIsComplete,
    updateExpirationPeriodIsComplete,
    updateCvcIsComplete,
    updatePasswordIsComplete,
  } = useCompletion();
  const visible = useVisibleSteps(isComplete);

  const { error, validators } = useInputError();
  const navigate = useNavigate();
  const { cardNumbers, cardBrand } = useCard();

  const isButtonShowing = useMemo(() => {
    const isAllComplete =
      Object.values(isComplete.cardNumbers).every(Boolean) &&
      isComplete.cardBrand &&
      Object.values(isComplete.expirationPeriod).every(Boolean) &&
      isComplete.cvcNumber &&
      isComplete.password;
    const isAllErrorFree = [
      ...Object.values(error.cardNumbers),
      ...Object.values(error.expirationPeriod),
      error.cvcNumber,
      error.cardBrand,
      error.password,
    ].every((v) => v === null);
    return isAllComplete && isAllErrorFree;
  }, [isComplete, error]);

  const showButton = isButtonShowing;

  const handleClick = () => {
    navigate("/success", {
      state: {
        cardNumber: `${cardNumbers.first}`,
        cardBrand: `${cardBrand}`,
      },
    });
  };

  return (
    <PaymentsCSS>
      <Preview />
      <form>
        {visible.password && (
          <InputSection
            type={INPUT_TYPE.password}
            onComplete={updatePasswordIsComplete}
            error={error}
            validators={validators}
          />
        )}
        {visible.cvcNumber && (
          <InputSection
            type={INPUT_TYPE.cvcNumber}
            onComplete={updateCvcIsComplete}
            error={error}
            validators={validators}
          />
        )}
        {visible.expirationPeriod && (
          <InputSection
            type={INPUT_TYPE.expirationPeriod}
            onComplete={updateExpirationPeriodIsComplete}
            error={error}
            validators={validators}
          />
        )}
        {visible.cardBrand && (
          <InputSection
            type={INPUT_TYPE.cardBrand}
            onComplete={updateCardBrandIsComplete}
            error={error}
            validators={validators}
          />
        )}
        <InputSection
          type={INPUT_TYPE.cardNumbers}
          onComplete={updateCardNumberIsComplete}
          error={error}
          validators={validators}
        />
        {showButton && <Button variant="home" onClick={handleClick} />}
      </form>
    </PaymentsCSS>
  );
}
export default Payments;
