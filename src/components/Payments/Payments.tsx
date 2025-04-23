import InputSection from "../\bInputSection/InputSection";
import { INPUT_TYPE } from "../../constants/constants";
import { useCompletion } from "../../hooks/useCompletion";
import Preview from "../Preview/Preview";
import { PaymentsCSS } from "./Payments.styled";

function Payments() {
  const { isComplete } = useCompletion();
  return (
    <PaymentsCSS>
      <Preview />
      <InputSection type={INPUT_TYPE.cardNumbers} />
      {Object.values(isComplete.cardNumbers).every(Boolean) && (
        <InputSection type={INPUT_TYPE.cardBrand} />
      )}
      {isComplete.cardBrand === true && (
        <InputSection type={INPUT_TYPE.expirationPeriod} />
      )}
      {Object.values(isComplete.expirationPeriod).every(Boolean) && (
        <InputSection type={INPUT_TYPE.cvcNumber} />
      )}
      {isComplete.cvcNumber === true && (
        <InputSection type={INPUT_TYPE.password} />
      )}
    </PaymentsCSS>
  );
}
export default Payments;
