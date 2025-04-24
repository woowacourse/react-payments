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

      {isComplete.cvcNumber === true && (
        <InputSection
          type={INPUT_TYPE.password}
          onComplete={updatePasswordIsComplete}
        />
      )}
      {Object.values(isComplete.expirationPeriod).every(Boolean) && (
        <InputSection
          type={INPUT_TYPE.cvcNumber}
          onComplete={updateCvcIsComplete}
        />
      )}
      {isComplete.cardBrand === true && (
        <InputSection
          type={INPUT_TYPE.expirationPeriod}
          onComplete={updateExpirationPeriodIsComplete}
        />
      )}
      {Object.values(isComplete.cardNumbers).every(Boolean) && (
        <InputSection
          type={INPUT_TYPE.cardBrand}
          onComplete={updateCardBrandIsComplete}
        />
      )}
      <InputSection
        type={INPUT_TYPE.cardNumbers}
        onComplete={updateCardNumberIsComplete}
      />
    </PaymentsCSS>
  );
}
export default Payments;
