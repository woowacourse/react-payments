import InputSection from "../../components/InputSection/InputSection";
import { INPUT_TYPE } from "../../constants/constants";
import { useCompletion } from "../../hooks/useCompletion";
import { useInputError } from "../../hooks/useInputError";
import Preview from "../../components/Preview/Preview";
import { PaymentsCSS } from "./Payments.styled";
import { useVisibleSteps } from "../../hooks/useVisibleSteps";
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

  return (
    <PaymentsCSS>
      <Preview />
      <form>
        {visible.password && (
          <InputSection
            type={INPUT_TYPE.password}
            onComplete={updatePasswordIsComplete}
            isComplete={isComplete}
            error={error}
            validators={validators}
          />
        )}
        {visible.cvcNumber && (
          <InputSection
            type={INPUT_TYPE.cvcNumber}
            onComplete={updateCvcIsComplete}
            isComplete={isComplete}
            error={error}
            validators={validators}
          />
        )}
        {visible.expirationPeriod && (
          <InputSection
            type={INPUT_TYPE.expirationPeriod}
            onComplete={updateExpirationPeriodIsComplete}
            isComplete={isComplete}
            error={error}
            validators={validators}
          />
        )}
        {visible.cardBrand && (
          <InputSection
            type={INPUT_TYPE.cardBrand}
            onComplete={updateCardBrandIsComplete}
            isComplete={isComplete}
            error={error}
            validators={validators}
          />
        )}
        <InputSection
          type={INPUT_TYPE.cardNumbers}
          onComplete={updateCardNumberIsComplete}
          isComplete={isComplete}
          error={error}
          validators={validators}
        />
      </form>
    </PaymentsCSS>
  );
}
export default Payments;
