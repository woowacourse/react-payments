import { useEffect, useState } from "react";
import InputSection from "../\bInputSection/InputSection";
import { INPUT_TYPE } from "../../constants/constants";
import { useCompletion } from "../../hooks/useCompletion";
import { useInputError } from "../../hooks/useInputError";
import Preview from "../Preview/Preview";
import { PaymentsCSS } from "./Payments.styled";
function Payments() {
  const [visible, setVisible] = useState({
    cardBrand: false,
    expirationPeriod: false,
    cvcNumber: false,
    password: false,
  });
  const {
    isComplete,
    updateCardNumberIsComplete,
    updateCardBrandIsComplete,
    updateExpirationPeriodIsComplete,
    updateCvcIsComplete,
    updatePasswordIsComplete,
  } = useCompletion();

  const { error, validators } = useInputError();

  useEffect(() => {
    console.log(visible);
    if (Object.values(isComplete.cardNumbers).every(Boolean)) {
      setVisible((prev) => ({ ...prev, cardBrand: true }));
    }
    if (isComplete.cardBrand) {
      setVisible((prev) => ({ ...prev, expirationPeriod: true }));
    }
    if (Object.values(isComplete.expirationPeriod).every(Boolean)) {
      setVisible((prev) => ({ ...prev, cvcNumber: true }));
    }
    if (isComplete.cvcNumber) {
      setVisible((prev) => ({ ...prev, password: true }));
    }
  }, [isComplete]);

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
