import InputSection from "../\bInputSection/InputSection";
import { INPUT_TYPE } from "../../constants/constants";
import { useCompletion } from "../../hooks/useCompletion";
import Preview from "../Preview/Preview";
import { PaymentsCSS } from "./Payments.styled";
function Payments() {
  const {
    isComplete,
    updateCardNumberIsComplete,
    updateCardBrandIsComplete,
    updateExpirationPeriodIsComplete,
    updateCvcIsComplete,
    updatePasswordIsComplete,
  } = useCompletion();
  return (
    <PaymentsCSS>
      <Preview />
      <form>
        {isComplete.cvcNumber === true && (
          <InputSection
            type={INPUT_TYPE.password}
            onComplete={updatePasswordIsComplete}
            isComplete={isComplete}
          />
        )}
        {Object.values(isComplete.expirationPeriod).every(Boolean) && (
          <InputSection
            type={INPUT_TYPE.cvcNumber}
            onComplete={updateCvcIsComplete}
            isComplete={isComplete}
          />
        )}
        {isComplete.cardBrand === true && (
          <InputSection
            type={INPUT_TYPE.expirationPeriod}
            onComplete={updateExpirationPeriodIsComplete}
            isComplete={isComplete}
          />
        )}
        {Object.values(isComplete.cardNumbers).every(Boolean) && (
          <InputSection
            type={INPUT_TYPE.cardBrand}
            onComplete={updateCardBrandIsComplete}
            isComplete={isComplete}
          />
        )}
        <InputSection
          type={INPUT_TYPE.cardNumbers}
          onComplete={updateCardNumberIsComplete}
          isComplete={isComplete}
        />
      </form>
    </PaymentsCSS>
  );
}
export default Payments;
